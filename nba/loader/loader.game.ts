import axios from 'axios';
import mongoose from 'mongoose';
import { Team } from '../db-model/model.team';
import { Player } from '../db-model/model.player';
import { Game } from '../db-model/model.game';
import express from 'express';

let games = [];

export default class GameLoader {
    static refresh(api_base: string, api_headers: any) {
        const games_ep = api_base.concat('/Games/2021POST')
        axios.get(games_ep, api_headers).then(res => {
            games = res.data;

            Game.remove({}, () => {
                console.log('refreshed games')
            });

            for (let x = 0; x < games.length; x++) {
                const newgame = new Game(games[x]);
                newgame.save(function (err: any, game: any) {
                    if (err) return console.error(err);
                })
            }
            console.log("updated " + games.length + " records")
        })
    }
}