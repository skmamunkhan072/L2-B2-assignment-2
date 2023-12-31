import config from '../../app/config'
import { TUser } from './user.interface'
import { Users } from './user.model'
import bcrypt from 'bcrypt'

// this is user data insert into DB service
const createUserIntoDB = async (userData: TUser) => {
  const user = new Users(userData)
  const result = await user.save()
  //   const result = await Users.create(userData)
  return result
}

// getting single from the database service
const getSingleUserFromDB = async (userId: string) => {
  const result = await Users.aggregate([
    { $match: { userId } },
    {
      $project: { orders: 0 },
    },
  ])
  return result
}

// All users getting from the database service
const getAllUsersFromDB = async () => {
  const result = await Users.find()
  return result
}

// single user Update from the database service
const singleUserUpdateFromDB = async (userId: string, userData: object) => {
  if (userData && userData?.password) {
    const password = await bcrypt.hash(
      userData?.password,
      Number(config.bcrypt_salt_rounds)
    )
    userData.password = password
  }
  const result = await Users.updateOne({ userId }, { $set: userData })
  return result
}

// single user delete from the database service
const singleUserDeleteFromDB = async (userId: string) => {
  const result = await Users.deleteOne({ userId })
  return result
}

// single user order add from the database service
const singleUserOrderCreateFromDB = async (userId: string, order: object) => {
  const result = await Users.updateOne({ userId }, { $push: { orders: order } })
  return result
}

// single user orders getting from the database service
const singleUserOrdersGetFromDB = async (userId: string) => {
  const result = await Users.aggregate([
    { $match: { userId } },
    {
      $project: {
        _id: 0,
        'orders.productName': 1,
        'orders.price': 1,
        'orders.quantity': 1,
      },
    },
  ])

  return result
}
// single user orders total price getting from the database service
const singleUserOrdersTotalPrice = async (userId: string) => {
  try {
    const result = Users.aggregate([
      {
        $match: { userId },
      },
      {
        $unwind: '$orders',
      },
      {
        $group: {
          _id: null,
          totalPrice: { $sum: '$orders.price' },
        },
      },
      {
        $project: {
          _id: 0,
          totalPrice: { $round: ['$totalPrice', 2] },
        },
      },
    ])
    return result
  } catch (err) {
    return err
  }
}

export const UserService = {
  createUserIntoDB,
  getSingleUserFromDB,
  getAllUsersFromDB,
  singleUserUpdateFromDB,
  singleUserDeleteFromDB,
  singleUserOrderCreateFromDB,
  singleUserOrdersGetFromDB,
  singleUserOrdersTotalPrice,
}
