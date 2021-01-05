import successRes from '../utils/successHandler';
import errorRes from '../utils/errorHandler';
import Models from '../database/models';

const { task } = Models;

class Tasks {
  static async create(req, res) {
    try {
      const { title, description, userId } = req.body;

      const Task = await task.create({
        title,
        description,
        userId,
      });
      return successRes(res, 201, 'Successfull created a Task', Task);
    } catch (error) {
      return errorRes(
        res,
        400,
        `There was error Task not created ${error.message}`
      );
    }
  }
}

export default Tasks;
