import {Team} from '../db-model/team'

import { Request, Response } from 'express'

export class TeamController {
   async getall(req: Request, res: Response) {
        try {
            const team = await Team.find(req.query);
            res.status(200).json(team);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};
