"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCountryById = void 0;
var data_1 = require("../data");
var deleteCountryById = function (req, res) {
    try {
        if (req.headers.authorization !== "tokenabc123") {
            res.statusCode = 401;
            throw new Error("Faltou o token");
        }
        var index = data_1.countries.findIndex(function (country) { return country.id === Number(req.params.id); });
        if (index === -1) {
            res.statusCode = 404;
            throw new Error("Não encontrado");
        }
        data_1.countries.splice(index, 1);
        res.status(204).end();
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end();
        }
        else {
            res.statusMessage = error.message;
            res.end();
        }
    }
};
exports.deleteCountryById = deleteCountryById;
