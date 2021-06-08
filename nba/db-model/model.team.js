"use strict";
exports.__esModule = true;
exports.Team = void 0;
var mongoose_1 = require("mongoose");
var TeamSchema = new mongoose_1.Schema({
    TeamID: { type: Number },
    Key: { type: String },
    City: { type: String },
    Name: { type: String },
    Conference: { type: String },
    Division: { type: String },
    PrimaryColor: { type: String },
    SecondaryColor: { type: String },
    TertiaryColor: { type: String },
    QuaternaryColor: { type: String },
    WikipediaLogoUrl: { type: String }
});
exports.Team = mongoose_1.model('teamdata', TeamSchema);
