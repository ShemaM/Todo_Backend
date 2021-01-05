import { Router } from 'express';
import Task from '../controllers/tasks';

const router = Router();

router.route('/tasks').post(Task.create);
// router.route('/tasks/:id').get(Task.get);

export default router;
