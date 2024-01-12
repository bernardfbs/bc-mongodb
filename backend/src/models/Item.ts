import mongoose, { Schema, Document } from 'mongoose';

interface Item extends Document {
  name: string;
  description: string;
}

const itemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<Item>('Item', itemSchema);