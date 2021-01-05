const { errorLog } = require("../../common/messages");
const Auth = require("../orm/auth");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../../config/jwt_config");

const signIn = async (user) => {
  try {
    const { password } = user;
    const result = await Auth.checkExistenceOfEmail(user);
    if (result.status) {
      let passwordStatus = bcrypt.compareSync(password, result.data.password);
      if (!passwordStatus) {
        return { status: false, data: {} };
      } else {
        let token = jwt.sign(
          {
            userId: result.data.userId,
          },
          config.secret,
          {
            expiresIn: "90d",
          }
        );
        return { status: false, data: token };
      }
    }
  } catch (ex) {
    errorLog(ex);
  }
};

const signUp = async (user) => {
  try {
    const result = await Auth.createNewUser(user);
    if (result.status) {
      return { status: true, data: result.data };
    } else {
      return { status: false, data: {} };
    }
  } catch (ex) {
    errorLog(ex);
  }
};

module.exports = { signIn, signUp };
