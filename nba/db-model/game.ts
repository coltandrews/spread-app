import { model, Schema, Model, Document} from 'mongoose'
interface IGame extends Document {
    Season: number,
    SeasonType: number,
    Status: string,
    DateTime: Date,
    AwayTeam: string,
    AwayTeamID: number,
    AwayTeamScore: number,
    HomeTeam: string,
    HomeTeamID: number,
    HomeTeamScore: number,
    PointSpread: number
}
const GameSchema: Schema = new Schema({
    Season: {type: String},
    SeasonType: {type: Number},
    Status: {type: String},
    DateTime: {type: Date},
    AwayTeam: {type: String},
    AwayTeamID: {type: Number},
    AwayTeamScore: {type: String},
    HomeTeam: {type: String},
    HomeTeamID: {type: Number},
    HomeTeamScore: {type: Number},
    PointSpread: {type: Number}
})

export const Game: Model<IGame> = model('gamedata', GameSchema)
