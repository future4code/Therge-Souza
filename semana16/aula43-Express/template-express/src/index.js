"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
//import { deleteCountryById } from "./endpoints/deleteCountryById"
var getAllCountries_1 = require("./endpoints/getAllCountries");
//import { getCountryById } from "./endpoints/getCountryById"
//import { getRandomCountry } from "./endpoints/getRandomCountry"
app_1.app.get("/countries", getAllCountries_1.getAllCountries);
//app.get("/countries/random", getRandomCountry) // precisa vir antes de /countries/:id
//app.get("/countries/:id", getCountryById)
app_1.app.get("/countries/:valor", function (req, res) { res.send("resposta"); }); // nunca será acessada );
//app.delete("/countries/:id", deleteCountryById)
