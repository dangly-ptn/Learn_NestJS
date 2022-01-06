import * as mongoose from "mongoose";

export const CarSchema = new mongoose.Schema({
  id: Number,
  branch: String,
  color: String,
  model: String
})
