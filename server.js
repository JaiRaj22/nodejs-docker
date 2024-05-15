import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'

import connectDB from './config/db.js'
import testroutes from './routes/testroutes.js'
import authroutes from './routes/authroutes.js'
import errormiddlewre from './middlewares/errormiddleware.js'
import jobroutes from './routes/jobsroute.js'


dotenv.config()

connectDB();

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/test", testroutes)
app.use("/api/v1/auth", authroutes)
app.use("/api/v1/jobs", jobroutes)

app.use(errormiddlewre)

 app.listen(port, () => {
     console.log(`app listening on port ${port}!`.italic.brightMagenta)
 })