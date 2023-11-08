const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

// getting register route from the routes folder
const registerUser = require("./routes/registerRoute");
const loginUser = require("./routes/loginRoute");
app.use("/login", loginUser);
app.use("/register", registerUser);

app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});
