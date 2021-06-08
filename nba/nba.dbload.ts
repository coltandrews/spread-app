import axios from 'axios';
import mongoose from 'mongoose';
import GameLoader from './loader/loader.game'
import TeamLoader from './loader/loader.team'
import PlayerLoader from './loader/loader.player'
import express from 'express';

const db_url = "mongodb+srv://admin:cheese01@cluster0.pfikg.mongodb.net/nba_db?retryWrites=true&w=majority";
const api_scores_base = ' https://fly.sportsdata.io/v3/nba/scores/json';
const api_stats_base = ' https://fly.sportsdata.io/v3/nba/stats/json';
const api_headers = {
    headers: {
        'Ocp-Apim-Subscription-Key': '2c9e7c21788c42cbbdf794b564cbb206'
    }
}

const app = express();

mongoose.connect(db_url, { useNewUrlParser: true });
const db = mongoose.connection;
var collections = mongoose.connection.collections;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to db');
    app.listen(3000, function () {   
        console.log('listening on 3000')
    })
    // populate teams
    TeamLoader.refresh(api_scores_base,api_headers)
    // populate games
    GameLoader.refresh(api_scores_base,api_headers)
    // populate players
    PlayerLoader.refresh(api_scores_base,api_headers)
})