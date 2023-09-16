const jsonServer = require("./data/db.json");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;
