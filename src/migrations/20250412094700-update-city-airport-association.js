"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airports", {
      type: "foreign key",
      name: "city_fkey_constraint", // give a name to the constraint
      fields: ["cityId"],
      references: {
        table: "Cities",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "city_fkey_constraint");
  },
};
