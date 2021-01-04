import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import Models from '../database/models';
import successRes from '../utils/successHandler';
import errorRes from '../utils/errorHandler';

config();

const { User } = Models;

class Users {
  static async register(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      const user = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      return successRes(res, 201, 'Successfully Registered a user', user);
    } catch (error) {
      return errorRes(res, 400, `user not created ${error.message}`);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser) return errorRes(res, 404, 'User  Not found ');
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (!isMatch) return errorRes(res, 404, 'Invalid password');

      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email },
        process.env.ACCESS_TOKEN_SECRET
      );
      return successRes(res, 200, 'Successfully logged a user', {
        token,
        foundUser,
      });
    } catch (error) {
      return errorRes(res, 400, `Not successfully logged in ${error.message}`);
    }
  }
}

export default Users;
