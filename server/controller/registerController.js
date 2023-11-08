const fs = require("fs");
const path = require("path");
const express = require("express");
const users = require("../data/users.json");
const router = require("express").Router();

const registerUser = (req, res) => {
  const { username, password } = req.body;

const existingUser = users.find((user) => user.username === username);
if (existingUser) {
  return res.status(400).json({
    error: "Username already exists",
  });
}

  // New user will be added to the users data
  const newUser = {
    id: users.length + 1,
    username,
    password,
  };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });

  const usersFilePath = path.join(__dirname, "../data/users.json");
  fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error("Error writing to users.json:", err);
      res.status(500).json({ message: "Registration failed" });
    } else {
      res.status(201).json({ message: "User registered successfully" });
    }
  });
};

module.exports = {
  router,
  registerUser,
};
