import User from '../models/user'

export default class UserService {

  /**
   * Search and return the user having the given ID.
   */
  async findById(id: string) {
    return await User.findById(id).exec()
  }

}
