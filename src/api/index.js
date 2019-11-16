import { Router } from 'express'
import userRoutes from './users/user.routes'

const routes = new Router()

routes.use('/users', userRoutes)

export default routes
