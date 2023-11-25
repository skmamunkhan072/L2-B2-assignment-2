import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './modules/user/user.router'
const app: Application = express()
// parsers
app.use(express.json())
app.use(cors())

// Application routes
app.use('/api/users', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Your server is running L2-B2-assignment-2',
  })
})

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'This route is not found',
  })
})

export default app
