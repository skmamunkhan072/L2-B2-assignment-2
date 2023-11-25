import { Request, Response } from 'express'

// This is testing controller
const testController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'your route is working',
  })
}

export const UserControllers = {
  testController,
}
