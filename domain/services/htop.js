const util = require("util");
const { errorLog } = require("../../common/messages");

exports.htop = async () => {
  try {
    const exec = util.promisify(require("child_process").exec);
    const result = await exec("htop");
    return result.stdout;
  } catch (ex) {
    errorLog(ex);
    return ex;
  }
};
