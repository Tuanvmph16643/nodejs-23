import express from 'express'
import { get, getById, create, update, remove } from '../controllers/device'
import authenticate from '../middleware/authenticate'

const deviceRouter = express.Router()

deviceRouter.get('/devices', get)
deviceRouter.get('/devices/:id', getById)
deviceRouter.post('/devices', authenticate , create)
deviceRouter.put('/devices/:id', update)
deviceRouter.delete('/devices/:id', remove)

export default deviceRouter