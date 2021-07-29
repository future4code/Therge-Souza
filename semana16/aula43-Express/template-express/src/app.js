"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(cors_1.default());
exports.app.get('/', function (req, res) {
    res.send("Funcionando");
});
exports.app.listen(3003, function () {
    console.log("Server está pronto!");
});
