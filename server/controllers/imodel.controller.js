const comments = {};

const userId = "user-id";
const commentID = "comment-id";

const getComments = async (req, res) => {
  try {
    const oneModel = comments[req.params.id];
    if (!oneModel) {
      return res.json({
        message: "No comments have been created for this iModel!",
        comments: [],
      });
    }
    return res.json({
      message: "Comments have been found for this iModel!",
      comments: oneModel,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addComment = async (req, res) => {
  //requires a req.header.user-id, req.body.text;
  try {
    if (!req.params.id) {
      return res.json({ message: "require an id for the params!" });
    }
    if (!req.body && !req.body.text) {
      return res.json({ message: "require a text key for the req.body!" });
    }
    let oneModel = comments[req.params.id];
    if (!oneModel) {
      oneModel = [];
    }
    const comment = {};
    comment.date = new Date().toLocaleString();
    comment.text = req.body.text;
    comment["comment-id"] = `${req.headers["user-id"]}-${Date.now()}`;
    comment["user-id"] = req.headers["user-id"];
    oneModel.push(comment);
    comments[req.params.id] = oneModel;
    return res.json({ message: "Comment added Successfully!", comment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.json({ message: "require an id for the params!" });
    }
    if (!req.body[commentID]) {
      return res.json({ message: "require a comment-id from the params!" });
    }
    let oneModel = comments[req.params.id];
    if (!oneModel) {
      return res
        .status(404)
        .json({ message: "No comments were found for this iModel!" });
    }
    let commentInd;
    for (let i = 0; i < oneModel.length; i++) {
      const oneComment = oneModel[i];
      if (oneComment[commentID] === req.body[commentID]) {
        if (oneComment[userId] !== req.headers[userId]) {
          return res
            .status(403)
            .json({ message: "User cannot delete other people's comments!" });
        }
        commentInd = i;
        break;
      }
    }
    if (commentInd === undefined) {
      return res
        .status(404)
        .json({ message: "No comment matched the comment-id given!" });
    }
    const deletedComment = oneModel.splice(commentInd);
    console.log(deletedComment);
    console.log(comments);
    return res.json({
      message: "Comment successfully deleted!",
      deletedComment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getComments, addComment, deleteComment };
