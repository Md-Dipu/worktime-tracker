import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

// Load environment variables from .env file
dotenv.config();

// Set the port from environment variables or default to 3000
const PORT: number = parseInt(process.env.PORT || '3000', 10);

const app: Application = express();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Health-check route
app.get('/api/health-check', (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: 'API is running and healthy',
  });
});

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(colors.blue.bold(`Server running at http://localhost:${PORT}`));
  }
});
