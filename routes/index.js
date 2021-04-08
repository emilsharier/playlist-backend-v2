const API_VERSION = process.env.API_VERSION;

const rootRoute = require("./root");

module.exports = (app) => {
  app.use(`/api/${API_VERSION}`, rootRoute);
  app.get("/keepMeAlive", (req, res, next) => {
    res.sendStatus(200);
  });
};
