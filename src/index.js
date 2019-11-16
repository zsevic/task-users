import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './config/database'
import constants from './config/constants'
import apiRoutes from './api'

const app = express()
const PORT = constants.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello from task-users<br>Check out <a href="/api/users">users</a>')
})

app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
