import { Request, Response } from 'express'
import userValidationSchema from './user.zod'
import { UserService } from './user.service'

// This is testing controller
const testController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'your route is working',
  })
}

// user create controller
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body

    const zodParseData = userValidationSchema.parse(userData)
    const result = await UserService.createUserIntoDB(zodParseData)
    res.status(200).json({
      success: true,
      message: 'User create is successful',
      data: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}

// getting single user from the database
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.getSingleUserFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Getting single user form the database',
      data: result[0],
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}

// All users getting from the database
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsersFromDB()
    res.status(200).json({
      success: true,
      message: 'All Users getting form the database',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}

export const UserControllers = {
  testController,
  createUser,
  getSingleUser,
  getAllUsers,
}
