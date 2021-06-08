import axios from 'axios';
import mongoose from 'mongoose';
import { Team } from '../db-model/model.team';
import { Player } from '../db-model/model.player';
import { Game } from '../db-model/model.game';
import express from 'express';

let teams = [];

export default class TeamLoader {
    static refresh(api_base: string, api_headers: any) {
        const teams_ep = api_base.concat('/AllTeams')
        axios.get(teams_ep, api_headers).then(res => {
            teams = res.data;

            Team.remove({}, () => {
                console.log('refreshed teams')
            });

            for (let x = 0; x < teams.length; x++) {
                const newteam = new Team(teams[x]);
                newteam.save(function (err, team) {
                    if (err) return console.error(err);
                })
            }
            console.log("updated " + teams.length + " records")
        })
    }
}