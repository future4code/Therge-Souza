"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryById = void 0;
var data_1 = require("../data");
var getCountryById = function (req, res) {
    var result = data_1.countries.find(function (country) { return country.id.toString() === req.params.id; });
    if (result) {
        res.send(result);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};
exports.getCountryById = getCountryById;
