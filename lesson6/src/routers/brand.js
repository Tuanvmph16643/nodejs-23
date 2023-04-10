import express from 'express'
import { get, create, getById, update, remove } from '../controllers/brand'
import authenticate from '../middleware/authenticate'

const brandRouter = express.Router()

brandRouter.get('/brands', get)
brandRouter.post('/brands', authenticate , create)
brandRouter.put('/brands/:id', update)
brandRouter.delete('/brands/:id', remove)
brandRouter.get('/brands/:id', getById)

export default brandRouter