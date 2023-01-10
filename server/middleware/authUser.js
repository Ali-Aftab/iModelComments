const authUser = (req, res, next) => {
  try {
    const userId = req.headers["user-id"];
    if (userId === undefined || userId === null) {
      return res
        .status(400)
        .send({ message: "Please attach a user-id to the request" });
    }
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
module.exports = { authUser };
