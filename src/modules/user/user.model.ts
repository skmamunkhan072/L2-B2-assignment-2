import mongoose, { Schema } from 'mongoose'
import { TOrders, TUser, TUserAddress, TUserName } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../app/config'

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
// this is orders schema
const orders = new Schema<TOrders>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
})

// This is main User Schema
const userSchema = new Schema<TUser>({
  userId: {
    type: String,
    required: [true, 'user id is Required'],
    unique: true,
  },
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: [{ type: String, required: true }],
  address: { type: userAddress, required: true },
  isActive: { type: Boolean, required: true },
  orders: [orders],
})

// previous user data modify password middleware
userSchema.pre('save', async function (next) {
  // hashing password and save DB
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  )
  next()
})

// post user save then middleware
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  )
  next()
})

// post user save then middleware
userSchema.post('save', function (user, next) {
  user.password = ''
  next()
})

export const Users = mongoose.model<TUser>('user', userSchema)
