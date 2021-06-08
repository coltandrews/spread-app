const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    PlayerID: {
        type: Number,
    },
    Status: {
        type: String,
    },
    TeamID: {
        type: Number,
    },
    Team: {
        type: String,
    },
    Jersey: {
        type: Number,
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Position: {
        type: String,
    },
    Height: {
        type: String,
    },
    Weight: {
        type: Number,
    },
    College: {
        type: String,
    },
    Experience: {
        type: Number
    }

})
var playerdata = mongoose.model('playerdata', playerSchema);
module.exports = playerdata;
