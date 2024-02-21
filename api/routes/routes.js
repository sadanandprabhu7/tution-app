const express = require("express");
const Router = express.Router();
const Authorization = require("../middleware/authentication");
const UserController = require("../controller/users");
const users = require("../controller/users");
Router.route("/").get((req, res) => {
  res.send("test api");
});

Router.route("/users/add").post(UserController.UsersCreation);
Router.route("/users/add/verify").post(UserController.UsersVerify);
Router.route("/users/login").get(UserController.UsersLogin);

Router.use(Authorization.Authentication);
Router.route("/users/update").post(UserController.UpdateUser);
Router.route("/users/profile").get(users.getUserProfile);
Router.route("/users/entities").get(users.getEntities);

module.exports = Router;
