"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCountry = void 0;
var data_1 = require("../data");
var getRandomCountry = function (req, res) {
    var index = Math.floor(Math.random() * 190);
    var result = data_1.countries.find(function (country) { return country.id === index; });
    console.log(index);
    if (result) {
        res.send(result);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};
exports.getRandomCountry = getRandomCountry;
