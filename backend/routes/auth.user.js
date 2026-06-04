import express from 'express';
import { createUser } from '../controller/user.controller.js';

const AuthRouter = express.Router();

AuthRouter.post('/signup', createUser);

export default AuthRouter;