import mongoose from 'mongoose';

const WorkSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  duration: { type: Number },
  note: { type: String },
});

export default mongoose.model('WorkSession', WorkSessionSchema);
