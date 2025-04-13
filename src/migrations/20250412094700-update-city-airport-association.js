"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // we will define the association using foreign key constraint:
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
      onDelete: "CASCADE", // means when you delete a city(parent) all the associated airports(childs) will also get deleted automatically
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "city_fkey_constraint");
  },
};
