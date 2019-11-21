import express from 'express';
import jedisRoute from './jedis';

const router = express.Router();

router.use('/jedis', jedisRoute);

export default router;
