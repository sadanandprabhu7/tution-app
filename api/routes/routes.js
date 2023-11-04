const express = require("express");
const Router = express.Router();
const Authorization = require("../middleware/authentication");
const studentsController = require("../controller/students");
const teachersController = require("../controller/teachers");
Router.route("/").get((req, res) => {
  res.send("test api");
});

Router.route("/student/add").post(studentsController.studentsCreation);
Router.route("/student/login").get(studentsController.studentsLogin);

Router.route("/teacher/add").post(teachersController.teachersCreation);
Router.route("/teacher/login").get(teachersController.teachersLogin);

Router.use(Authorization.studentsAuthentication);
Router.route("/allstudents").get(studentsController.allStudents);

Router.use(Authorization.teachersAuthentication);
Router.route("/allTeachers").get(teachersController.allTeachers);
Router.route("/updateTeachersAddress").post(
  teachersController.updateTeachersAddress
);
Router.route("/updateTeachersTime").post(teachersController.updateTeachersTime);
Router.route("/updateTeachersClass").post(
  teachersController.updateTeachersClass
);
Router.route("/updateTeachersSubject").post(
  teachersController.updateTeachersSubject
);
Router.route("/teachersStatus").get(teachersController.teachersStatus);
Router.route("/teachersDashboard").get(teachersController.teachersDashboard);
Router.route("/teachersStatusChange").post(
  teachersController.teachersStatusChange
);
module.exports = Router;
