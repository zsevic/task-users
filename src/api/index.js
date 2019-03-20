import userRoutes from './user/user.routes'

export default app => {
  app.use('/users', userRoutes)
}
