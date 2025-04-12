const { StatusCodes } = require("http-status-codes");
//const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

// this is the generlized repository for doing crud operations can be used by other repos by extending it..
// So this is for internal used be other repos..
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // here we don't need to handel errors(using try-catch or else) , it will be done in the service layer
  // async create(data) {
  //   try {
  //     const response = await this.model.create(data);
  //     return response;
  //   } catch (error) {
  //     Logger.error("Something went wrong in the CRUD repo: Create");
  //     throw error;
  //   }
  // }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    // returns "1" for successful deletion
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new AppError("Data Not Found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError("Data Not Found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
      returning: true, // Ensures updated rows are returned
    });
    if (!response) {
      throw new AppError("Data Not Found", StatusCodes.NOT_FOUND);
    }
    return response;
  }
}

module.exports = CrudRepository;
