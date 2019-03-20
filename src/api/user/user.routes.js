import { Router } from 'express'
import * as userController from './user.controller'

const routes = new Router()

routes.get('/', userController.getUsers)

export default routes
