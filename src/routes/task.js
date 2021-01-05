import { Router } from 'express';
import Task from '../controllers/tasks';

const router = Router();

router.route('/tasks').post(Task.create);
router.route('/tasks/:id').get(Task.find).put(Task.update).delete(Task.delete);

export default router;
