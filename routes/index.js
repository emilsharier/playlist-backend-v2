const API_VERSION = process.env.API_VERSION;

const rootRoute = require("./root");

module.exports = (app) => {
  app.use(`/server/api/${API_VERSION}`, rootRoute);
};
