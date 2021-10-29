const { util, statusCode, responseMessage, posts } = require("./module_import");

module.exports = async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  let filteredPost = posts.filter((post) => post.id === id);
  if (filteredPost.length !== 1) {
    return res.status(
      util.fail(statusCode.NO_CONTENT, responseMessage.POST_NOT_MATCHED)
    );
  }
  filteredPost = filteredPost[0];
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.GET_POST_SUCCESS, {
      id: filteredPost.id,
      content: filteredPost.content,
      writer: filteredPost.writer,
    })
  );
};
