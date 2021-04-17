import mongoose, { Document } from "mongoose";

export interface iRide extends Document {
  /**
   * The ID of ride.
   */
   id: string

   /**
    * The ID of user which ride belongs to.
    */
   user_id: string

   /**
    * The price of ride expressed in cents.
    */
   price: number

   /**
    * The address of ride destination.
    */
   destination_address: string

   /**
    * The address of ride departure.
    */
   departure_address: string

   /**
    * The datetime of ride.
    */
   date: Date
}

const userSchema = new mongoose.Schema(
  {
    _id: { type: String },
    user_id: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    destination_address: { type: String, required: true, trim: true },
    departure_address: { type: String, required: true, trim: true },
    date: { type: Date, required: true }
  },
  {
    id: true,
    toJSON: { virtuals: true }
  }
)

const Ride = mongoose.model<iRide>('Ride', userSchema);

export default Ride
