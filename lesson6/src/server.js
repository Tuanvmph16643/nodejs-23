import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser";

import userRouter from "./routers/user";
import deviceRouter from './routers/device'
import brandRouter from "./routers/brand";
import specificationsRouter from "./routers/specifications";

const app = express()
const port = 8080

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Router
app.use('/auth', userRouter)
app.use('/api', deviceRouter)
app.use('/api', brandRouter)

// MongoDB
mongoose.connect("mongodb://localhost:27017/we17317")
.then(() => console.log("Connected to DB"))

app.listen(port, () => {
    console.log("Server is running on " + port);
})