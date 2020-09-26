"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = "mongodb+srv://admin:dontfake1@fincas.9hyxb.mongodb.net/test";
async function startConnection() {
    try {
        await mongoose_1.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log("Database is connected");
    }
    catch (e) {
        console.log(e);
    }
}
exports.startConnection = startConnection;
