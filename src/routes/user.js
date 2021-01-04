import { Router } from 'express';
import User from '../controllers/user';

const router = Router();

router.route('/user/register').post(User.register);

export default router;
