import bcrypt from 'bcryptjs';
import { Router } from 'express';

import User from '../models/User';

const router = Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: (err as { message: string }).message });
  }
});

export default router;
