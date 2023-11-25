import express from 'express'
import { UserControllers } from './user.controller'
const route = express.Router()

// This is test route
route.get('/test', UserControllers.testController)

//This is user create post route
route.post('/', UserControllers.createUser)

// This is single user getting from the database route
route.get('/:userId', UserControllers.getSingleUser)

// This is all users getting from the database route
route.get('/', UserControllers.getAllUsers)

export const UserRoutes = route
