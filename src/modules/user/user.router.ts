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

// This is single user update from the database route
route.put('/:userId', UserControllers.getSingleUpdate)

// This is single user delete from the database route
route.delete('/:userId', UserControllers.getSingleDelete)

// This is single user orders add from the database route
route.put('/:userId/orders', UserControllers.singleUserOrderUpdate)

// This is single user orders getting from the database route
route.get('/:userId/orders', UserControllers.getSingleUserOrders)

// This is single user orders total price from the database route
route.get(
  '/:userId/orders/total-price',
  UserControllers.getSingleUserOrdersTotalPrice
)

export const UserRoutes = route
