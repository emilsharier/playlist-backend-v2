const { errorLog } = require("../../common/messages");
const bcrypt = require("bcrypt");
const User = require("../entities/user");

const uniqid = require("uniqid");

const checkExistenceOfEmail = async (user) => {
  try {
    const { email } = user;
    const filter = { email: email };
    const result = await User.findOne(filter);
    if (result) {
      return {
        status: true,
        data: result,
      };
    } else {
      return {
        status: false,
        data: {},
      };
    }
  } catch (ex) {
    errorLog(ex);
  }
};

const createNewUser = async (user) => {
  try {
    const { email, username, name, password } = user;
    const pass = await bcrypt.hash(password, 8);

    const uid = uniqid();

    let obj = new User({
      userId: uid,
      username: username,
      email: email,
      name: name,
      password: pass,
    });

    const result = await obj.save();

    if (result.errors) {
      return {
        status: false,
        data: {},
      };
    } else {
      return {
        status: true,
        data: result,
      };
    }
  } catch (ex) {
    errorLog(ex);
  }
};

module.exports = { checkExistenceOfEmail, createNewUser };
