import axios from 'axios';
import mongoose from 'mongoose';
import { Team } from '../db-model/model.team';
import { Player } from '../db-model/model.player';
import { Game } from '../db-model/model.game';
import express from 'express';

let players = [];

export default class PlayerLoader {
    static refresh(api_base: string, api_headers: any) {
        const players_ep = api_base.concat('/Players')
        axios.get(players_ep, api_headers).then(res => {
            players = res.data;

            Player.remove({}, () => {
                console.log('refreshed players')
            });

            for (let x = 0; x < players.length; x++) {
                const newplayer = new Player(players[x]);
                newplayer.save(function (err, player) {
                    if (err) return console.error(err);
                })
            }
            console.log("updated " + players.length + " records")
        })
    }
}