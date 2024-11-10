import { configDotenv } from "dotenv";
import ErrorHandler from "./ErrorHandler";
const axios = require("axios");

configDotenv();
async function getTwitchAccessToken() {
  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: "client_credentials",
        },
      }
    );
    return response.data.access_token;
  } catch (error: any) {
    console.error("Error fetching Twitch access token:", error);
    return new ErrorHandler(
      `Error fetching Twitch access token ${error.message}`,
      400
    );
  }
}
export default getTwitchAccessToken;
