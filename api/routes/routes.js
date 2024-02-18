const express = require("express");
const Router = express.Router();
const Authorization = require("../middleware/authentication");
const studentsController = require("../controller/students");
const teachersController = require("../controller/teachers");
const users = require("../controller/users");
Router.route("/").get((req, res) => {
  res.send("test api");
});

Router.route("/student/add").post(studentsController.studentsCreation);
Router.route("/student/add/verify").post(studentsController.studentsVerify);

Router.route("/student/login").get(studentsController.studentsLogin);

Router.route("/teacher/add").post(teachersController.teachersCreation);
Router.route("/teacher/add/verify").post(teachersController.teachersVerify);

Router.route("/teacher/login").get(teachersController.teachersVerify);

Router.use(Authorization.studentsAuthentication);
Router.route("/allstudents").get(studentsController.allStudents);

Router.use(Authorization.teachersAuthentication);
Router.route("/allTeachers").get(teachersController.allTeachers);
Router.route("/teachers/update/address").post(
  teachersController.updateTeachersAddress
);
Router.route("/teachers/update/time").post(
  teachersController.updateTeachersTime
);
Router.route("/teachers/update/class").post(
  teachersController.updateTeachersClass
);
Router.route("/teachers/update/subject").post(
  teachersController.updateTeachersSubject
);
Router.route("/teachers/status").get(teachersController.teachersStatus);
Router.route("/user/profile").get(users.getUserProfile);
Router.route("/user/entities").get(users.getEntities);

Router.route("/teachersStatusChange").post(
  teachersController.teachersStatusChange
);

module.exports = Router;
