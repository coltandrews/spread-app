const mongoose = require('mongoose');
const gameSchema = mongoose.Schema({
    GameId: {
        type: Number
    },
    Season: {
        type: Number
    },
    // 1=Regular Season 
    // 2=Preseason 
    // 3=Playoffs
    SeasonType: {
        type: Number
    },
    Status: {
        type: String
    },
    DateTime: {
        type: Date
    },
    AwayTeam: {
        type: String
    },
    AwayTeamID: {
        type: Number
    },
    AwayTeamScore: {
        type: Number
    },
    HomeTeam: {
        type: String
    },
    HomeTeamID: {
        type: Number
    },
    HomeTeamScore: {
        type: Number
    },
    PointSpread: {
        type: Number
    },
    WikipediaLogoUrl: {
        type: String
    },
    

})
var gamedata = mongoose.model('gamedata', gameSchema);
module.exports = gamedata;
