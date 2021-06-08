import express from 'express'
import {TeamController} from '../controller/controller.team'

const TeamRouter = express.Router()
const tc = new TeamController()

// routes
TeamRouter.get('/all', tc.getall)

export default TeamRouter