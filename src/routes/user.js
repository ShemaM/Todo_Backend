import { Router } from 'express';
import User from '../controllers/user';

const router = Router();

router.route('/register').post(User.register);
router.route('/login').post(User.login);

export default router;
