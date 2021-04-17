
export default interface iRide {
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
