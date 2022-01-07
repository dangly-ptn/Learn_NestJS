import { Document } from 'mongoose'

export interface ILogin extends Document {
  readonly email: string,
  readonly password: string
}
