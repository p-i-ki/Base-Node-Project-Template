"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // this is a class method ( Model.init() ) to define models instead of sequelize.define()
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Airplane", // modelName is "Airplane" which by default maps to Airplanes table (pluralized automatically
    }
  );
  return Airplane;
};
