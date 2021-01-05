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

  static async find(req, res) {
    try {
      const Task = await task.findOne({ where: { id: req.params.id } });
      return successRes(res, 200, 'successfully retrieved', Task);
    } catch (error) {
      return errorRes(res, 404, 'task not found');
    }
  }

  static async update(req, res) {
    try {
      const Task = await task.update(req.body, {
        where: { id: req.params.id },
      });

      const updatedTask = await task.findOne({ where: { id: req.params.id } });

      return successRes(res, 201, 'successfully updated task', updatedTask);
    } catch (error) {
      return errorRes(res, 404, `no task with Id ${req.params.id} found`);
    }
  }
}

export default Tasks;
