import axios from 'axios';
import type { Location, SearchParams } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const locationApi = {
  getNearby: async (params: SearchParams): Promise<Location[]> => {
    const response = await api.get<Location[]>('/locations', { params });
    return response.data;
  },
  getById: async (id: string): Promise<Location> => {
    const response = await api.get<Location>(`/locations/${id}`);
    return response.data;
  },
};
