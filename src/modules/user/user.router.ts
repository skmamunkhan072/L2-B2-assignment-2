import express from 'express'
import { UserControllers } from './user.controller'
const route = express.Router()

// This is test route
route.get('/test', UserControllers.testController)

//This is user create post route
route.post('/', UserControllers.createUser)

export const UserRoutes = route
