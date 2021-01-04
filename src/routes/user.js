import { Router } from 'express';
import User from '../controllers/user';

const router = Router();

router.route('/user/register').post(User.register);
router.route('/user/login').post(User.login);

export default router;
