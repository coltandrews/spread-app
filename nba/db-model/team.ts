import { model, Schema, Model, Document} from 'mongoose'
export interface ITeam extends Document {
    TeamID: number,
    Key: string,
    City: string,
    Name: string,
    Conference: string,
    Division: string,
    PrimaryColor: string,
    SecondaryColor: string,
    TertiaryColor: string,
    QuaternaryColor: string,
    WikipediaLogoUrl: string
}
const TeamSchema: Schema = new Schema({
    TeamID: {type: Number},
    Key: {type: String},
    City: {type: String},
    Name: {type: String},
    Conference: {type: String},
    Division: {type: String},
    PrimaryColor: {type: String},
    SecondaryColor: {type: String},
    TertiaryColor: {type: String},
    QuaternaryColor: {type: String},
    WikipediaLogoUrl: {type: String}
})

export const Team: Model<ITeam> = model('teamdata', TeamSchema)