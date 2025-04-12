const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane); // passing model to the CrudRepo
  }
}

module.exports = AirplaneRepository;
