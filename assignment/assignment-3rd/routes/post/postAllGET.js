const { util, statusCode, responseMessage, posts } = require("./module_import");

module.exports = async (req, res) => {
  res
    .status(200)
    .send(
      util.success(
        statusCode.UPDATE_POST_SUCCESS,
        responseMessage.UPDATE_POST_SUCCESS,
        posts
      )
    );
};
