import * as mongoose from 'mongoose'

export const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: String
})
