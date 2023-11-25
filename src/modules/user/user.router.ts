import express from 'express'
import { UserControllers } from './user.controller'
const route = express.Router()

// This is test route
route.get('/test', UserControllers.testController)

export const UserRoutes = route
