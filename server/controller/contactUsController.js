const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")(require("../knexfile"));
const contactUsController = express.Router();

contactUsController.use(cors());
contactUsController.use(bodyParser.json());

contactUsController.post("/", async (req, res) => {
  try {
    // Insert form data into the database
    await knex("contact_form").insert({
      name: req.body.name,  
      email: req.body.email,
      message: req.body.message,
    });

    console.log("Form data inserted into the database.");

    // Send a response to the client
    res.status(200).json({ message: "Form submission successful!" });
  } catch (error) {
    console.error("Error inserting form data into the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = contactUsController;
