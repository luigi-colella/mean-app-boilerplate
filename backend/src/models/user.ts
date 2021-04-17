import mongoose, { Document } from "mongoose";

export interface iUser extends Document {
  /**
   * The ID of user.
   */
  id: string

  /**
   * The name of user.
   */
  name: string

  /**
   * The surname of user.
   */
  surname: string

  /**
   * The img URL of user's avatar.
   */
  img: string

  /**
   * The phone number of user.
   */
  number: string

  /**
   * The email of user.
   */
  email: string
}

const userSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    number: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true }
  },
  {
    id: true,
    toJSON: { virtuals: true }
  }
)

const User = mongoose.model<iUser>('User', userSchema);

export default User
