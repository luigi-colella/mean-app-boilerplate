const PORT = process.env.PORT
if (!PORT) throw 'No configured port for backend'

const DATABASE_URI = process.env.DATABASE_URI
if (!DATABASE_URI) throw 'No database uri'

const DATABASE_USERNAME = process.env.DATABASE_USERNAME
if (!DATABASE_USERNAME) throw 'No database username'

const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
if (!DATABASE_PASSWORD) throw 'No database password'

const IS_DEVELOPMENT = process.env.NODE_ENV = 'development'

export default {
  PORT,
  IS_DEVELOPMENT,
  DATABASE_URI,
  DATABASE_USERNAME,
  DATABASE_PASSWORD
}
