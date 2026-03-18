import { Router } from 'express';
import { FavoriteController } from '../controllers/favoriteController.js';

const router = Router();

// /api/favorites
router.get('/', FavoriteController.getFavorites);
router.post('/', FavoriteController.addFavorite);
router.delete('/', FavoriteController.removeFavorite);
router.get('/check', FavoriteController.checkFavorite);

export default router;
