import { ErrorRequestHandler, Handler } from "express"
import { withStatus } from "../helpers/http"

/**
 * Handle the not found error.
 */
export const notFoundErrorHandler: Handler = (req, res) => {
  res.json(withStatus({ 'message': 'Not found page' }, 'error'))
}

/**
 * Handle errors throwed by any other controllers.
 */
export const errorHandler: ErrorRequestHandler = (err: any, req, res, next) => {
  let errorMessage = 'Server side error'
  if (typeof err === 'string') errorMessage = err
  if (typeof err.message === 'string') errorMessage = err.message

  console.error('A controller throwed an error.', err)

  res.json(withStatus({ 'message': errorMessage }, 'error'))
}
