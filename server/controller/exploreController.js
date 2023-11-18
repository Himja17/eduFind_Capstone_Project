const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// To get all categories from the database
const explorePrograms = (_req, res) => {
  knex("category")
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving categories: ${err}`);
    });
};

// Getting programs based on the selected category
const getProgramsFromCategories = (req, res) => {

    // In the programs database, I am selecting the category id
  knex("programs")
    .where({ category_id: req.params.id })
    .then((programFromCategory) => {
      if (programFromCategory === 0) {
        return res.status(404).json({
          message: `Program with ID: ${req.params.id} does not exist`,
        });
      }
      let updatedArray = [];
      for (i in programFromCategory) {
        const { created_at, updated_at, ...rest } = programFromCategory[i];
        const newArray = rest;
        updatedArray.push(newArray);
        }
        res.status(200).json(updatedArray)
    });
};

module.exports = {
  router,
    explorePrograms,
  getProgramsFromCategories
};
