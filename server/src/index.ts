import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import locationRoutes from './routes/locationRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/locations', locationRoutes);
app.use('/api/favorites', favoriteRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'FamMap API is running' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
