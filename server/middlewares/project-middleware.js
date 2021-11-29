const ApiError = require("../exceptions/api-error");
const ProjectModel = require("../models/project.model");

module.exports = async function (req, res, next) {
  try {
    const projectID = req.query.projectID;
    const redirectURL = req.query.redirectURL;
    // const scope = req.body.scope;
    const project = await ProjectModel.findOne({ projectID });

    if (!project) {
      return next(ApiError.NotFound("Project ID does not exist"));
    }
    if (!project.redirectURLs.includes(redirectURL)) {
      next(ApiError.BadRequest("Redirect URL mismatch!"));
    }
    //   if (project.scope != scope) {
    //     next(ApiError.BadRequest("Invalid Scope!"));
    //   }

    req.project = project;
    next();
  } catch (error) {
    if (error.code) {
      res.status(error.code).send(error);
    } else {
      res.status(500).send({ message: "Unknown Error" });
    }
  }
};
