"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var model_team_1 = require("../db-model/model.team");
var teams = [];
var TeamLoader = /** @class */ (function () {
    function TeamLoader() {
    }
    TeamLoader.refresh = function (api_base, api_headers) {
        var teams_ep = api_base.concat('/AllTeams');
        axios_1["default"].get(teams_ep, api_headers).then(function (res) {
            teams = res.data;
            model_team_1.Team.remove({}, function () {
                console.log('refreshed teams');
            });
            for (var x = 0; x < teams.length; x++) {
                var newteam = new model_team_1.Team(teams[x]);
                newteam.save(function (err, team) {
                    if (err)
                        return console.error(err);
                });
            }
            console.log("updated " + teams.length + " records");
        });
    };
    return TeamLoader;
}());
exports["default"] = TeamLoader;
