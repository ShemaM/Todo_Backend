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
}

export default Users;
