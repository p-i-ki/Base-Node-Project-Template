const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    // for other types of error:
    throw new AppError(
      "Can't create a new Airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Can't fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    // Because AppError has a statusCode property..
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane requested is Not Found!",
        error.statusCode
      );
    }
    throw new AppError(
      "Can't fetch the airplane data!",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane requested to Delete is Not Found!",
        error.statusCode
      );
    }
    throw new AppError(
      "Can't delete the airplane data!",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data);
    console.log("Updated Airplane: ", airplane);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane requested to Update is Not Found!",
        error.statusCode
      );
    }
    throw new AppError(
      "Can't update the airplane data!",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};

// SequelizeValidationError contains an array of ValidationErrorItem objects for different fields, like email, name , etc inside "errros" field..
// error:{
//   errors:[
//     ValidationErrorItem{message:"", type:"" ,path: , ..},
//     ValidationErrorItem{message:"", type:"" ,path: , ..},
//     ValidationErrorItem{message:"", type:"" ,path: , ..}
//   ]
// }
// we are applying forEach loop on this errors field to extract error related to each field and push it into a explanation array..

// Service layer will acts as brain of our application by handling the business logic of the app.
// Here we will handle DB queries and Errors during interaction with DB. this errors will be sent to controllers and controllers no need to sent any custom error in such cases.
// the most important error is Validation error which occurs due to invalid data sent by the client. we have to report the client about mistakes he has made..
