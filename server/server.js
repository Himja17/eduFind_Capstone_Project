const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

//import route and controller
const registerUser = require("./routes/registerRoute");
const loginUser = require("./routes/loginRoute");
const exploreCategories = require("./routes/exploreRoute");
const contactUs = require("./controller/contactUsController")

app.use("/login", loginUser);
app.use("/register", registerUser);
app.use("/explore", exploreCategories);
app.use("/contact", contactUs)

app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});
