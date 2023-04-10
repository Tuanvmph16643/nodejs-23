import express from 'express'
import { get, create, getById, update, remove } from '../controllers/specifications'
import authenticate from '../middleware/authenticate'

const specificationsRouter = express.Router()

specificationsRouter.get('/specifications', get)
specificationsRouter.post('/specifications', authenticate , create)
specificationsRouter.put('/specifications/:id', update)
specificationsRouter.delete('/specifications/:id', remove)
specificationsRouter.get('/specifications/:id', getById)

export default specificationsRouter