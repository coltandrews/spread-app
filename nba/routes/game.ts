import express from 'express'
import { GameController } from '../controller/controller.game'

const GameRouter = express.Router()
const gc = new GameController()


// routes
GameRouter.get('/all', gc.getGames)
GameRouter.get('/', gc.getGameCards)

export default GameRouter