//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/1RCVYDc0/Photoleap-02-10-2024-10-50-57-LNU6k.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "923277712441";
global.read_status_from = process.env.READ_STATUS_FROM || "923277712441,923307670193";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkl3TndYRWdYNjArL09kYXdhaWloVUZFYlh6eUNIZTRjUmQrMlRGTUlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUZ2Y09zWTRzaWd6dEhZV1lFWnYwRWUrdnhHTGlMZjVNYWxtQVpLUkxVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS3d1U3pBUmh5SWpMWHZmcXVOeHBDVHlIbTlhdHEzb0NMa3I2cDZTN2xRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVaWl1MlJpRlE2V3B5eTBNVzFnTysyTVVxbEhxTFd5djNLM1gzdHh4UnlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEM2VuMjErNXpWd0luZitTRXZYaEw2K2NpcXBXdWtGZ0VRTnpqdzhjbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMZjByUXlhVEh1ZlZiMmhpMzhFeWZGSGtvYWVLSlI2c2dBdGEzT3I4WEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhFeEI4QU1EZ0R4aGtrTzVjT2JiYkNyeE53SHRxWTJ3TFBsNnhBNVkxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnYyWW5ZZG1Zd1RydDNhZkNqSWJhelQxK2N5cFY5UFlPZWg0WERNTzBqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp6VFNXNnRTd1luazBPdFUvS05DYXIxTW5RZ1JGZS9PeGhaRFpCVUk4Wis0QjhtdVlMbWJXc0JFWEtZellKMlhGWjlnWlllUm9NVWZDbEl3N0N1eWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IklRdCtVZUNySURqbmNNOUxvT3E2bmdERWVqZ0Y1UEEwMlJTenVBdkt0dmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjc3NzEyNDQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRGMUI3QjZDOUM3N0MxQkVENkE0RTY0MThGMDk3N0Q1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgzNTg4ODN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NzcxMjQ0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0N0EwNUY0QTVGQ0U3NTRDNEY4MEE1NUM1RUFGODc2QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MzU4ODg0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJURHY1bVpYWVMzdWZGSjNuQURuVVVnIiwicGhvbmVJZCI6IjA2NGMwOTU0LWE0NWEtNDliNy05MTFkLWNjYjk3MDc0ZGMxZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaTFNMQjZrd0VHakZia1kzMDZjRDgzL1JWdnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlxTFBESForL2o2d2pyTGpOc3dyWjgxV2lvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFIQjI1M0VYIiwibWUiOnsiaWQiOiI5MjMyNzc3MTI0NDE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6W6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcTgwK2dDRU5YVGtyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWQ1FNZGtGQnNHYjl5NFRGNno5UDd5Y1pkeXVhNDFhNlVsN3dBb2FMWkF3PSIsImFjY291bnRTaWduYXR1cmUiOiJKbmE2RGJ5WGd6R3N0ejB0Sld5NDRvdVBlMSttcnhlRy9nQ2s5dzFhUXhITk5oZU9SVS9Vd3llbmNaemNXQXdFTndubnRWS0Mza2FDTEVJUDAwZXNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3FaNVFuNW1HNStMVm5Bc01iM2xEY201bkNIeFVjdEIvUDlyOTZKZjVkWFdKOXZNTWQ3bjdUM0xTQjhIOENWQTcrS0hkUkFiV2I2bDUzaEEvNDV6Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNzc3MTI0NDE6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUWtESFpCUWJCbS9jdUV4ZXMvVCs4bkdYY3JtdU5XdWxKZThBS0dpMlFNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MzU4ODgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9wUCJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`FK DAVIL-V3™`",
  author: process.env.PACK_AUTHER || "FK DAVIL-V3",
  packname: process.env.PACK_NAME || "F A H A D",
  botname: process.env.BOT_NAME || " DAVILS-V3",
  ownername: process.env.OWNER_NAME || "F A H A D",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
