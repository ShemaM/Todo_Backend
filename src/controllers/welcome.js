import errorRes from '../utils/errorHandler';
import successRes from '../utils/successHandler';

class Welcome {
  static async get(req, res) {
    try {
      return successRes(res, 200, 'Welcome To Shema Todoapp');
    } catch (error) {
      return errorRes(
        res,
        500,
        `There is an error welcoming you to Shema Todoapp (${error.message})`
      );
    }
  }
}

export default Welcome;
