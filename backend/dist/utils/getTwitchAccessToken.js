"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const ErrorHandler_1 = __importDefault(require("./ErrorHandler"));
const axios = require("axios");
(0, dotenv_1.configDotenv)();
function getTwitchAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.post("https://id.twitch.tv/oauth2/token", null, {
                params: {
                    client_id: process.env.TWITCH_CLIENT_ID,
                    client_secret: process.env.TWITCH_CLIENT_SECRET,
                    grant_type: "client_credentials",
                },
            });
            return response.data.access_token;
        }
        catch (error) {
            console.error("Error fetching Twitch access token:", error);
            return new ErrorHandler_1.default(`Error fetching Twitch access token ${error.message}`, 400);
        }
    });
}
exports.default = getTwitchAccessToken;
