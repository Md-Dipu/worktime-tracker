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

router.get('/logs', authenticate, async (req, res) => {
  try {
    const logs = await WorkSession.find({ userId: req.user.id });
    res.status(200).json(logs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/notes', async (req, res) => {
  const { sessionId, note } = req.body;

  try {
    const workSession = await WorkSession.findById(sessionId);
    if (!workSession) {
      return res.status(404).json({ message: 'Work session not found' });
    }

    workSession.note = note; // Add or update the note
    await workSession.save();
    res.status(200).json({ message: 'Note updated successfully', workSession });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.delete('/notes', async (req, res) => {
  const { sessionId } = req.body;

  try {
    const workSession = await WorkSession.findById(sessionId);
    if (!workSession) {
      return res.status(404).json({ message: 'Work session not found' });
    }

    workSession.note = null; // Delete the note
    await workSession.save();
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
