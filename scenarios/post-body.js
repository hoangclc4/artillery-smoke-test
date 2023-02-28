const postData = require('../data/code-data.json');
const { v4 } = require('uuid');
/**
 * Generates post body
 */
const generatePostBody = async (userContext, events, done) => {
  try {
    const codeData = postData[Math.floor(Math.random() * postData.length)];
    // random request id to force api create more code.
    codeData.request_id = `${v4()}`;
    userContext.vars.data = codeData;

    // continue with executing the scenario:
    return done();
  } catch (err) {
    console.log(`Error occurred in function generatePostBody. Detail: ${err}`);
    throw err;
  }
};

module.exports.generatePostBody = generatePostBody;
