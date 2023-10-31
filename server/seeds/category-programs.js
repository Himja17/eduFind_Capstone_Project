/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const categoryData = require("../seed-data/category");
const programsData = require("../seed-data/programs");

exports.seed = async function (knex) {
  return knex("programs")
    .del()
    .then(function () {
      return knex("category").del();
    })
    .then(function () {
      return knex("category").insert(categoryData);
    })
    .then(() => {
      return knex("programs").insert(programsData);
    });
};
