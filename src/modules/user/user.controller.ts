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
      error: {
        code: 404,
        description: err,
      },
    })
  }
}

// getting single user from the database
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.getSingleUserFromDB(userId)
    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: result.length
          ? 'Users fetched successfully!'
          : 'User Not found',
        data: result[0],
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
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
      message: 'Users fetched successfully!',
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
      message: 'User updated successfully!',
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
    await UserService.singleUserDeleteFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
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
const singleUserOrderUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const order = req.body
    const zodParseData = ordersValidationSchema.parse(order)
    await UserService.singleUserOrderCreateFromDB(userId, zodParseData)
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

// single user orders getting from the database
const getSingleUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.singleUserOrdersGetFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result[0],
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
// single user orders total price getting from the database
const getSingleUserOrdersTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.singleUserOrdersTotalPrice(userId)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
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
  singleUserOrderUpdate,
  getSingleUserOrders,
  getSingleUserOrdersTotalPrice,
}
