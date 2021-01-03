const { errorLog } = require("../common/message_log");

module.exports = (err, res) => {
  const { statusCode = 500, message = "Error" } = err;
  errorLog(`!Error: ${message}`);
  res.status(statusCode).json({
    sucess: false,
    message,
  });
};
