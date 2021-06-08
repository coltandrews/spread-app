"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var model_game_1 = require("../db-model/model.game");
var games = [];
var GameLoader = /** @class */ (function () {
    function GameLoader() {
    }
    GameLoader.refresh = function (api_base, api_headers) {
        var games_ep = api_base.concat('/Games/2021POST');
        axios_1["default"].get(games_ep, api_headers).then(function (res) {
            games = res.data;
            model_game_1.Game.remove({}, function () {
                console.log('refreshed games');
            });
            for (var x = 0; x < games.length; x++) {
                var newgame = new model_game_1.Game(games[x]);
                newgame.save(function (err, game) {
                    if (err)
                        return console.error(err);
                });
            }
            console.log("updated " + games.length + " records");
        });
    };
    return GameLoader;
}());
exports["default"] = GameLoader;
