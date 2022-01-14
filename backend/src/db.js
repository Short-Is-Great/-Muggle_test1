import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  origin: {type: String, required: true },
  short: {type: String, required: true }
})

const LinkModel = mongoose.model("Link", LinkSchema);
export { LinkModel };