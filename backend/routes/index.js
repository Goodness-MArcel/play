import express from 'express';
import { createUser } from '../controller/user.controller.js';

const router = express.Router();

router.post('/auth/signup', createUser);

export default router;