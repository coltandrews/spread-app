"use strict";
exports.__esModule = true;
exports.Player = void 0;
var mongoose_1 = require("mongoose");
var PlayerSchema = new mongoose_1.Schema({
    PlayerID: { type: Number },
    Status: { type: String },
    TeamID: { type: Number },
    Team: { type: String },
    Jersey: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Position: { type: String },
    Height: { type: String },
    Weight: { type: Number },
    College: { type: String },
    Experience: { type: Number }
});
exports.Player = mongoose_1.model('playerdata', PlayerSchema);
