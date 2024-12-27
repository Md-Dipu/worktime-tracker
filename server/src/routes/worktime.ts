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

router.post('/stop', authenticate, async (req, res) => {
  try {
    const session = await WorkSession.findOne({
      userId: req.user.id,
      endTime: null,
    });
    if (!session) return res.status(404).json({ error: 'No active session' });

    session.endTime = new Date();
    session.duration =
      (session.endTime.getTime() - session.startTime.getTime()) / 60000; // minutes
    await session.save();
    res.status(200).json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
