import { Router } from 'express';
import errorRes from '../utils/errorHandler';
import welcome from '../controllers/welcome';
import docRouter from '../documentation/docs';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Welcome
 *     name: welcome
 *     summary: welcome to Shema Todoapp
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Welcome To shema TodoApp.
 * */

/**
 * @swagger
 * /*:
 *   get:
 *     tags:
 *       - Unknown Route
 *     name: unknown
 *     summary: unknown endpoint
 *     consumes:
 *        - application/json
 *     responses:
 *       400:
 *             description: Route Not Found.
 * */

router.get('/', welcome.get);
router.use('/documentation', docRouter);
router.use('*', (req, res) => errorRes(res, 400, 'Route not Found'));

export default router;
