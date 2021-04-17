import { Handler } from "express"

/**
 * Attach a status field in the given response JSON.
 */
export const withStatus = (json: object, status: 'success' | 'error' = 'success') => {
  return Object.assign({}, { status }, json)
}

/**
 * Create a controller from the given handler.
 */
export const createController = (handler: Handler): Handler => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
