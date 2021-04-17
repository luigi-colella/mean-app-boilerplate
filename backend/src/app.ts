import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import { errorHandler, notFoundErrorHandler } from './controllers/error'
import env from './env'
import userRouter from './routes/user'


mongoose.connect(env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
  auth: {
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD
  }
})
.then(() => {
  console.log('MongoDB connected')
})
.catch(err => {
  console.error(err)
})

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
if (env.IS_DEVELOPMENT) {
  app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
}

// APIs routes
app.use('/user', userRouter)

// Error handlers
app.use('/', notFoundErrorHandler)
app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log('Node.js server started')
})
