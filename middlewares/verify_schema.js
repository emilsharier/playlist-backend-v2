const { Details } = require("../DB/db");

const verify_schema = async (req, res, next) => {
  try {
    let result = await Details.validateAsync(req.body);
    req.result = result;
    next();
  } catch (ex) {
    next(ex);
  }
};

module.exports = { verify_schema };
