import express from 'express';
import userauth from '../middlewares/authmiddleware.js';
import { createjobcontroller, getalljobscontroller } from '../middlewares/jobscotroller.js';

const router = express.Router();

router.post('/create-post', userauth, createjobcontroller, getalljobscontroller)

export default router