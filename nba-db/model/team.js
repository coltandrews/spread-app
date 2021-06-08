const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    TeamID: {
        type: Number,
    },
    Key: {
        type: String,
    },
    City: {
        type: String,
    },
    Name: {
        type: String,
    },
    Conference: {
        type: String,
    },
    Division: {
        type: String,
    },
    PrimaryColor: {
        type: String,
    },
    SecondaryColor: {
        type: String,
    },
    TertiaryColor: {
        type: String,
    },
    QuaternaryColor: {
        type: String,
    },
    WikipediaLogoUrl: {
        type: String,
    }

})
var teamdata = mongoose.model('teamdata', teamSchema);
module.exports= teamdata;
