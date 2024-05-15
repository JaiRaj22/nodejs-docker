import express from 'express'
import { testpostcontroller } from '../controllers/testcontroller.js'
import userauth from '../middlewares/authmiddleware.js'

const router = express.Router()

router.post('/test-post',userauth ,testpostcontroller)

export default router