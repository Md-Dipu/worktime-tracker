import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import 'colors';

import authRoutes from './routes/auth';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Database connected'.green.bold))
  .catch((err) => console.error(err));

export default app;
