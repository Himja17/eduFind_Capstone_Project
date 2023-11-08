const express = require("express");
const router = express.Router();
const users = require("../data/users.json");

const loginUser = (req, res) => {
  const { username, password } = req.body;

  //   Find user in users data
  const user = users.find(
    (usr) => usr.username === username && usr.password === password
  );

  if (user) {
    // Authentication successful
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(404).json({ error: "Username not found" });
  }
};

module.exports = {
  router,
  loginUser,
};
