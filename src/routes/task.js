import { Router } from 'express';
import Task from '../controllers/tasks';
import protect from '../middlewares/protect';

const router = Router();

router.route('/tasks').post(protect, Task.create);
router
  .route('/tasks/:id')
  .get(protect, Task.find)
  .put(protect, Task.update)
  .delete(protect, Task.delete);

export default router;
