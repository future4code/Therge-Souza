"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = void 0;
var data_1 = require("../data");
var getAllCountries = function (req, res) {
    console.log(req.query);
    var result = data_1.countries.map(function (countrie) { return ({
        id: countrie.id,
        name: countrie.name
    }); });
    console.log(result);
    res.statusMessage = "Mensagem Customizada";
    res.send(result);
};
exports.getAllCountries = getAllCountries;
