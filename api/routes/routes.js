const express = require("express");
const Router = express.Router();
const Authorization = require("../middleware/authentication");
const UserController = require("../controller/users");
const users = require("../controller/users");
Router.route("/").get((req, res) => {
  res.send("test api");
});

Router.route("/teacher/add").post(UserController.UsersCreation);
Router.route("/teacher/add/verify").post(UserController.UsersVerify);
Router.route("/teacher/login").get(UserController.UsersLogin);

Router.use(Authorization.Authentication);
Router.route("/users/update").post(UserController.UpdateUser);
Router.route("/user/profile").get(users.getUserProfile);
Router.route("/user/entities").get(users.getEntities);

module.exports = Router;
