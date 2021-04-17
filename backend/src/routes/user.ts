import express from 'express'
import { getUser, getUserRides, saveNewUserRide } from '../controllers/user'

let router = express.Router()

router.get('/', getUser)
router.get('/:uid/rides', getUserRides)
router.post('/:uid/rides', saveNewUserRide)

export default router
