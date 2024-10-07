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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Vkdnp2SksyT1FSMnhwdnhWQW96UDRWTFVHa0ZlMVZLb3NvQXVKTHFYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWJXSml4akY3K1VXRWZZMGx3N2Nyd0NGdFN0ayswZ0Rma2craGc4aThuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUGJKUGU2TlNocWlGbVQwMVdBSGxjUmsxcUJlNTNxOTJmUU5vM0p1NkY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Wlh4UW5tMFQwR1d2UnVDVFAvY3BRbFVZdll6MXRBMzhuTEw2eXVOZVRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHenlkV29LejFOR2hZdDVkbU9laisvVTdNaEZFMEN3MDFvZWJlU2xTbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlJVzN0c0lhZW1xQWcyVGpRMnlkakhiUjJlNFdzYzlic0x2OFIwZFFZUlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09lWTZCWGNwTTEybjc2ZjFXMzZvMzJzWFFQNTlGYU1MTzVKbkx0eXVFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWVUN0FQcVVFZXo2aVp1eno3YWVLYUk4Q1RsT0RHQTErYkJaUUlwdmR5RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVwV2hnWnhTc3NrSVl2cWQvaEF4S2dNL1NxNzhuUmk2Rkswa0RZSTFFMVYzMUR1U2JxaHExTStxdXpjY2FVSXNFQUxHUFc2b1l1aXY4RmdxRUgyUEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiIzKzNDSzJaTVhRYzd5a3RqeWZKWmNmR3dOMXNGdmk1Y1RvVUdjTTYvTFk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NzcxMjQ0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MjQzOUVENTI5NjlDNEJEQkZGNTEwQkNCMzZCQkM4MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MzAyNjY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNzc3MTI0NDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTIwNUJBRkZCRUQ2MUJBRDhGQ0Q0RUUyRjE1ODcwQkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODMwMjY2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibDhReVVZVEZUU0d1SVc5dWZYRHlVQSIsInBob25lSWQiOiI3N2M4Y2JkYS03ZmQ2LTQ1YzEtYmU0Ny1iOWJmZDE4NDk4MjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS9GWnZuV1ptbUNkcVJpWGVSNmRJQTUyZGpjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVOYWYxQUJZOE10REprbFRpejV6cTQraVhQRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5OTVCWFJaWCIsIm1lIjp7ImlkIjoiOTIzMjc3NzEyNDQxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+luiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT204MCtnQ0VMbWNqN2dHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkNRTWRrRkJzR2I5eTRURjZ6OVA3eWNaZHl1YTQxYTZVbDd3QW9hTFpBdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNlBrSEY0V3d6WVMvZ0h0YUl2UTJvWTh3cUNtSG12TnAxeC9KRkVscVI3aTh2QnFtZXE4ZHpiZmV3UldQRmpDTTFGUENVbDhVWC9pT2Y0L21aSFFxQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjRUZVpNbFlzVkVNdDlrSDM4dTlJdlRMSExhYVRvV09lZklHQ3FtYnYxc0d5cGdOV2p5Ynh6YVNVaDl1c2tIOHpFaG95dXpmblVVSEg3SHpxWFhZV0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjc3NzEyNDQxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlFrREhaQlFiQm0vY3VFeGVzL1QrOG5HWGNybXVOV3VsSmU4QUtHaTJRTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODMwMjY2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFN1kifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
