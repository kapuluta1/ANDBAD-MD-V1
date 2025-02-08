const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "   ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0twVTFPK1ZrOWR2dHNUV3dsQ2M5aXdDeWJwR3RxR1BpSW1waEdoSHhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1oQ1VtU2Z0R1pMaW90cWRwUThnekROc2M5MjQzUlB6UnpBcnNZU296UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UEwzeVpMSml5WWJKeTVmc2FNcTlYR0hzc1NnMVA2OFBjVTNrYTBJbVU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOHN3ZVEwRzJyYis1bEpnS1QybExsZUc5bVN4T0lxcGZoOXF5cGQ5L1hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LS0s5cUlaRHNncjlBSXdnVXVyQ2hHa1pYVzZXRkdaMGdEeFp6NjhORjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJtdG5oOWlyTW8yRk5xYUtyaEszM2NzZzNVbGZGNDgvaTVGLzhweXN5RGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1KdVBWZHRLOThNYUQ2eHpUbkFJcDkwNS9VaGpuU1B2ZERUN3RxTmwwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGpIY2xLNllqZ0RTQ0ljLzVLSGxGK01QbGNFK2psbytPU0xGZllPbk1oMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpGdXpLTWVLSkswYnNSMHg1SHZOdmEraWpVUXV4QUo4N0k1bGF2TzhpSjVzWmlXMEd0WjVFa0N1VW9PMURPelV0aGpnSGxHMFFna3JYRTMzUFU2L0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJTL2RySU9NSU1yTGdYUnFxMXU3QlRZVnRBTnNyQy9zS2lhZ2hQMmVlRjg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2cTlaVkdaSFJ1U3p0X1R4cXdwVWpBIiwicGhvbmVJZCI6IjdiNGRjMThiLWNlYWMtNDNhNi1iNDQ5LTA1YmIzYzc2OTJkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1S3NGdnZPQWFBd05ML2pNajR4R1dIQlhVdnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnAxdkZYY2R0M2VKanJCRkgybkd5UG5qeG9RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEzRTNEOEUzIiwibWUiOnsiaWQiOiIyNTU3NDY0Mjg4MzU6NzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bS/4bS14bac4bS04bSs4bS/4bSwKPCdkazwnZKO8J2ShvCdkpPwnZKK8J2SlfCdkpbwnZKUKeG2nOG1nuG0ruG0seG0vyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzcxcUljR0VQbVZtNzBHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFAyaFF2eXJuUnpERTBORlRLTTlmZDJzSUxDaVFOU2NwYkRORWZ2aGxWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMWU0UXVsbUphemM5VHBNYVh2Qm5GU3hwTXByUmFCVGE2cDR1YlVnNXdHa2tXSXJ4dWhBTEFwVVR3TzN3ZG1JR3pHR1draTZOU1R5WnhkdnZsVGZrQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InA0N3pyc2FwRUxxcmdLQktmdG5Ld1VZNTVWaGJwSWtYUGJyR2s0SmJrNThqUnZmdHlSeUg2L2cwcTFXcjRGaVY5NFdYRHV2cVp0bldxd0lFUEg3bkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ2NDI4ODM1OjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN6OW9VTDhxNTBjd3hORFJVeWpQWDNkckNDd29rRFVuS1d3elJINzRaVlcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg5ODQxOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHViIn0= ",
  'PREFIXE': process.env.PREFIX || '.',
  'OWNER_NAME': process.env.OWNER_NAME || "emeritus",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "255746428835",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "𝚫𝚴𝐃𝚩𝚫𝐃-𝚳D",
  'URL': process.env.BOT_MENU_LINKS || "https://i.imgur.com/L4U2K76.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'non',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
