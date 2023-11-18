const express = require("express");
const router = express.Router();
const users = require("../data/users.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = (req, res) => {
  const { username, password } = req.body;

  //   Find user in users data
  const user = users.find((usr) => usr.username === username);

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Compare the provided password with the hashed password in user data
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "14d", // Token expiration time
      }
    );

    // Authentication successful
    res.status(200).json({ token });
  } else {
    // Invalid password
    res.status(401).json({ error: "Invalid password" });
  }
};

module.exports = {
  router,
  loginUser,
};






