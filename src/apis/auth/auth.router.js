import express from 'express'
import authController from './auth.controller'
// import { authMiddleware } from '../middleware';
import { authMiddleware } from '../middleware'
// import * as Middlewares from "../middleware"
const route = express.Router()

route.post('/register', authController.register)
route.post('/login', authController.login)
route.post('/me', authMiddleware.checkToken, authController.getMe)

export default route
