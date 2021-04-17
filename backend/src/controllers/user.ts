import { createController, withStatus } from "../helpers/http"
import RideService from "../services/ride-service"
import UserService from "../services/user-service"

/**
 * Get the default user used by the app.
 */
export const getUser = createController(async (req, res) => {
  let userService = new UserService()
  let user = await userService.findById('6061e09f3faa0d1629466480')

  res.json(withStatus({ user }))
})

/**
 * Get all rides related to a given user.
 */
export const getUserRides = createController(async (req, res) => {
  let user_id = req.params.uid
  if (typeof user_id !== 'string') throw new Error('No valid user id.')
  let rideService = new RideService()
  let rides = await rideService.findByUserId(user_id)

  res.json(withStatus({ rides }))
})

/**
 * Save a new ride for the given user.
 */
export const saveNewUserRide = createController(async (req, res) => {
  let user_id = req.params.uid
  if (typeof user_id !== 'string') throw new Error('No valid user id.')
  let rideService = new RideService()
  let newRide = await rideService.save(Object.assign({}, req.body, { user_id }))

  res.json(withStatus({ ride: newRide }))
})
