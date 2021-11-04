const userModel = require("../models/user-model");
const UserModule = require("../models/user-model");

class UserService {
  async register(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with the same email already exist!`);
    }
    const user = await UserModel.create({ email, password });
  }
}

module.exports = new UserService();
