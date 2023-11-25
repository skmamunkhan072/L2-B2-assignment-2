import mongoose, { Schema } from 'mongoose'
import { TUser, TUserAddress, TUserName } from './user.interface'

// This is user Name Schema
const userName = new Schema<TUserName>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
  },
  { _id: false }
)

// This is user Address Schema
const userAddress = new Schema<TUserAddress>(
  {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { _id: false }
)

// This is main User Schema
const userSchema = new Schema<TUser>({
  userId: { type: String, required: [true, 'user id is Required'] },
  username: { type: String },
  fullName: { type: userName, required: [true, 'User Name is Required'] },
  password: { type: String, required: [true, 'Password must be required'] },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  hobbies: [{ type: String, required: true }],
  address: { type: userAddress, required: true },
  isActive: { type: Boolean, required: true },
})

export const Users = mongoose.model<TUser>('user', userSchema)