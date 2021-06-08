const axios = require('axios');
const mongoose = require('mongoose');
const Team = require('./model/team');
const Player = require('./model/player');
const Game = require('./model/game');
const express = require('express');
const date = require('date-and-time');

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

let teams = [];
let games = [];
let players = [];
var names = [];


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to db');
    app.listen(3000, function () {   
        console.log('listening on 3000')
    })
   
    // populate teams
    const teams_ep = api_scores_base.concat('/AllTeams')
    axios.get(teams_ep, api_headers
    ).then(res => {
        this.teams = res.data;
        Team.remove({}, () => {
           
        });
        for (let x = 0; x < this.teams.length; x++) {
            const newteam = new Team(this.teams[x]);
            newteam.save(function (err, team) {
                if (err) return console.error(err);
            })
        }
        console.log("updated "+this.teams.length+" records")
    })

    // populate games
    const games_ep = api_scores_base.concat('/Games/2021POST')
    axios.get(games_ep, api_headers).then(res => {
        this.games = res.data;
        
        Game.remove({}, () => {
            
        });
       
        for (let x = 0; x < this.games.length; x++) {
            const newgame = new Game(this.games[x]); 
            newgame.save(function (err, game) {
                if (err) return console.error(err);

            })
            
        }

        console.log("updated "+this.games.length+" records")

        
    })
    
    // // populate players
    const players_ep = api_scores_base.concat('/Players')
    axios.get(players_ep, api_headers).then(res => {
        this.players = res.data;
        Player.remove({}, () => {
        });
        for (let x = 0; x < this.players.length; x++) {
            const newplayer = new Player(this.players[x]);
            newplayer.save(function (err, player) {
   
            })
        }
        console.log("updated "+this.players.length+" records")
    })
})
