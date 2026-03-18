import type { Location, SearchParams } from '../types/location.js';
export declare class LocationService {
    private static calculateDistance;
    static findNearby(params: SearchParams): Promise<Location[]>;
    static findById(id: string): Promise<Location | null>;
}
//# sourceMappingURL=locationService.d.ts.map