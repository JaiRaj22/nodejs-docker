import express from 'express';
import { registercontroller, logincontroller } from '../controllers/authcontroller.js';

const router = express.Router()

router.post('/register', registercontroller)

router.post('/login', logincontroller)

export default router