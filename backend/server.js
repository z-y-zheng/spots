const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const userRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

let User = require("./user.model");

userRoutes.route("/").get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

userRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user) {
    res.json(user);
  });
});

userRoutes.route("/add").post(function (req, res) {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.status(200).json({ user: "successfully added new user" });
    })
    .catch((err) => {
      res.status(400).send("adding new user failed");
    });
});

app.use("/users", userRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
