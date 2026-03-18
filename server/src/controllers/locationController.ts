import { type Request, type Response } from 'express';
import { z } from 'zod';
import { LocationService } from '../services/locationService.js';

const searchSchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  radius: z.coerce.number().positive().default(5000), // Default 5km
  category: z.enum(['park', 'nursing_room', 'restaurant', 'medical']).optional(),
});

export class LocationController {
  static async getNearby(req: Request, res: Response) {
    const parseResult = searchSchema.safeParse(req.query);

    if (!parseResult.success) {
      return res.status(400).json({ error: 'Invalid search parameters', details: parseResult.error.format() });
    }

    const { lat, lng, radius, category } = parseResult.data;
    const locations = await LocationService.findNearby({ lat, lng, radius, category });

    res.json(locations);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    if (typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const location = await LocationService.findById(id);

    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.json(location);
  }
}
