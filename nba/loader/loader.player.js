"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var model_player_1 = require("../db-model/model.player");
var players = [];
var PlayerLoader = /** @class */ (function () {
    function PlayerLoader() {
    }
    PlayerLoader.refresh = function (api_base, api_headers) {
        var players_ep = api_base.concat('/Players');
        axios_1["default"].get(players_ep, api_headers).then(function (res) {
            players = res.data;
            model_player_1.Player.remove({}, function () {
                console.log('refreshed players');
            });
            for (var x = 0; x < players.length; x++) {
                var newplayer = new model_player_1.Player(players[x]);
                newplayer.save(function (err, player) {
                    if (err)
                        return console.error(err);
                });
            }
            console.log("updated " + players.length + " records");
        });
    };
    return PlayerLoader;
}());
exports["default"] = PlayerLoader;
