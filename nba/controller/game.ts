import {Game} from '../db-model/game'
import {GameCard} from '../api-model/game.response'
import {Team} from '../db-model/team'

import { Request, Response } from 'express'

export class GameController {

    async getGames(req: Request, res: Response) {
        try {
            const games = await Game.find(req.query)
            console.log(games)
            res.status(200).json(games);
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    async getGameCards(req: Request, res: Response) {
        try {
            const response = []
            const games = await Game.find(req.query)
            for (let g = 0; g < games.length; g++) {
                const game = games[g]
                const ht: any = await Team.findOne({ TeamID: game.HomeTeamID })
                const at: any = await Team.findOne({ TeamID: game.AwayTeamID })
                const gc: GameCard = new GameCard(game._id, game.Season, game.SeasonType, game.DateTime, game.Status, ht.Name, ht.Key, game.HomeTeamID, game.HomeTeamScore, ht.WikipediaLogoUrl, ht.PrimaryColor, ht.SecondaryColor, at.Name, at.Key, game.AwayTeamID, game.AwayTeamScore, at.WikipediaLogoUrl, at.PrimaryColor, at.SecondaryColor, game.PointSpread)
                response.push(gc)
            }
            res.status(200).json(response)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}
