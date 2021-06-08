"use strict";
exports.__esModule = true;
exports.Game = void 0;
var mongoose_1 = require("mongoose");
var GameSchema = new mongoose_1.Schema({
    Season: { type: String },
    SeasonType: { type: Number },
    Status: { type: String },
    DateTime: { type: Date },
    AwayTeam: { type: String },
    AwayTeamID: { type: Number },
    AwayTeamScore: { type: String },
    HomeTeam: { type: String },
    HomeTeamID: { type: Number },
    HomeTeamScore: { type: Number },
    PointSpread: { type: Number }
});
exports.Game = mongoose_1.model('gamedata', GameSchema);
