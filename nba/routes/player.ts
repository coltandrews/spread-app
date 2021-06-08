import express from 'express'
import { PlayerController } from '../controller/player'

const PlayerRouter = express.Router()
const pc = new PlayerController()

// routes
PlayerRouter.get('/all', pc.getall)

export default PlayerRouter