const mongoose = require("mongoose");
const { dbErrorLog, dbSuccessLog } = require("../../common/messages");
const url = process.env.MONGO_URI;
const DB = process.env.DATABASE;

mongoose
  .connect(url + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    dbErrorLog(`Error occured while connecting : ${err}`);
  });

mongoose.connection.on("connected", () => {
  dbSuccessLog(`Mongoose successfully connected to ${url}`);
});

mongoose.connection.on("error", (err) => {
  dbErrorLog(`Mongoose connection error : ${err}`);
});

mongoose.connection.on("disconnected", () => {
  dbErrorLog(`\nMongoose disconnected\n`);
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    dbErrorLog(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
