const { authUser } = require("../middleware/index");
const controller = require("../controllers/imodel.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/imodel/comments/:id", authUser, controller.getComments);
  app.post("/api/imodel/comments/:id", authUser, controller.addComment);
  app.delete("/api/imodel/comments/:id", authUser, controller.deleteComment);
};
