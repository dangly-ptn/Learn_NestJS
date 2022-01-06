import { Document } from "mongoose";

export interface ICar extends Document {
  readonly id: number
  readonly branch: string
  readonly color: string
  readonly model: string
}
