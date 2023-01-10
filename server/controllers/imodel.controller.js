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

module.exports = { getComments };
