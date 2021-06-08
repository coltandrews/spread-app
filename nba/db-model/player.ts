import { model, Schema, Model, Document} from 'mongoose'
interface IPlayer extends Document {
    PlayerID: number,
    Status: string,
    TeamID: number,
    Team: string,
    Jersey: number,
    FirstName: string,
    LastName: string,
    Position: string,
    Height: string,
    Weight: string,
    College: string,
    Experience: number
}
const PlayerSchema: Schema = new Schema({
    PlayerID: {type: Number},
    Status: {type: String},
    TeamID: {type: Number},
    Team: {type: String},
    Jersey: {type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Position: {type: String},
    Height: {type: String},
    Weight: {type: Number},
    College: {type: String},
    Experience: {type: Number}
})

export const Player: Model<IPlayer> = model('playerdata', PlayerSchema)
