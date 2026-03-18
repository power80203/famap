import { Router } from 'express';
import { LocationController } from '../controllers/locationController.js';

const router = Router();

// /api/locations
router.get('/', LocationController.getNearby);
router.get('/:id', LocationController.getById);

export default router;
