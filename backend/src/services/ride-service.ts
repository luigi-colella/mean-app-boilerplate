import mongoose from "mongoose"
import Ride from "../models/ride"


export default class RideService {

  /**
   * Find the rides related to the given user ID.
   */
  async findByUserId(user_id: string) {
    return await Ride.find({ user_id }).exec()
  }

  /**
   * Save a new ride.
   */
  async save(ride: any) {
    ride.date = new Date(ride?.date)
    let newRide = new Ride(ride)
    newRide._id = (new mongoose.Types.ObjectId()).toHexString()

    return await newRide.save()
  }

}
