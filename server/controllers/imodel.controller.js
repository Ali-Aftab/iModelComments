const comments = {};

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

module.exports = { getComments, addComment };
