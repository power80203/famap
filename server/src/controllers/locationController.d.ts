import { type Request, type Response } from 'express';
export declare class LocationController {
    static getNearby(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=locationController.d.ts.map