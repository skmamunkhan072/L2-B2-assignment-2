import { Request, Response } from 'express'
import userValidationSchema, { ordersValidationSchema } from './user.zod'
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
      message: result.length
        ? 'Getting single user form the database'
        : 'User Not found',
      data: result.length > 0 ? result[0] : {},
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: err,
      },
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

// single user update from the database
const getSingleUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const userData = req.body
    const result = await UserService.singleUserUpdateFromDB(userId, userData)
    res.status(200).json({
      success: true,
      message: 'single user update successfully from the database',
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

// single user delete from the database
const getSingleDelete = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.singleUserDeleteFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'single user deleted successfully from the database',
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

// single user order create from the database
const getSingleUserOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const order = req.body
    const zodParseData = ordersValidationSchema.parse(order)
    const result = await UserService.singleUserOrderCreateFromDB(
      userId,
      zodParseData
    )
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: err,
      },
    })
  }
}

export const UserControllers = {
  testController,
  createUser,
  getSingleUser,
  getAllUsers,
  getSingleUpdate,
  getSingleDelete,
  getSingleUserOrder,
}
