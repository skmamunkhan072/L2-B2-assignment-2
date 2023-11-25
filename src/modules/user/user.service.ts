import { TUser } from './user.interface'
import { Users } from './user.model'

// this is user data insert into DB service
const createUserIntoDB = async (userData: TUser) => {
  const user = new Users(userData)
  const result = await user.save()
  return result
}

// getting single from the database service
const getSingleUserFromDB = async (userId: string) => {
  const result = await Users.aggregate([{ $match: { userId } }])
  return result
}

export const UserService = {
  createUserIntoDB,
  getSingleUserFromDB,
}
