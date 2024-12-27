import jwt from 'jsonwebtoken';
import WorkSession from '../models/WorkSession';
import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

router.post('/start', authenticate, async (req, res) => {
  try {
    const workSession = new WorkSession({
      userId: req.user.id,
      startTime: new Date(),
    });
    await workSession.save();
    res.status(201).json(workSession);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
