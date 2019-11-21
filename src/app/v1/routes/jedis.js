import express from 'express';
import JediController from '../jedis/controller';

const router = express.Router();
const controller = new JediController();

router.get('/', controller.index);

export default router;
