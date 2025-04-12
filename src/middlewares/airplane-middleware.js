const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  // if modelNumber is empty:
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = new AppError(
      ["Model Number not found in the request body"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateRequest,
};

// Don't use Raw String , use some JSON and import and use it..
