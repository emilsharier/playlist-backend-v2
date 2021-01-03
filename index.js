// Initialising database connection
require("./domain/repository/db");

const PORT = process.env.PORT;
const express = require("express");
const app = express();

const { messageLog } = require("./common/messages");

const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("short"));
}

// Declaring routes
require("./routes/index")(app);

app.listen(PORT, () => {
  messageLog(`Server up and running at ${PORT}`);
});
