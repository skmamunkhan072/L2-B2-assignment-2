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

export const UserControllers = {
  testController,
  createUser,
}
