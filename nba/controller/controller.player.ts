import {Player} from '../db-model/model.player'

import { Request, Response } from 'express'

export class PlayerController {
   async getall(req: Request, res: Response) {
        try {
            const player = await Player.find(req.query);
            res.status(200).json(player);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

