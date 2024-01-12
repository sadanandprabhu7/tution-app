const Student = require("../model/students");
const CommanFunction = require("../utils/commanFunction");
const Teacher = require("../model/teachers");
const Entities = require("../services/entities");
class users {
  static async getUserProfile(req, res) {
    try {
      let found = req?.user;
      const lastAddress = found?.address[found?.address?.length - 1];
      const lastTime = found?.times;
      const lastSubject = found?.subjects;
      const lastClass = found?.classes;
      const userData = {
        address: lastAddress ? lastAddress : null,
        times: lastTime ? lastTime : null,
        subjects: lastSubject ? lastSubject : null,
        classes: lastClass ? lastClass : null,
        name: `${req.user?.first_name} ${req.user?.last_name}`,
        email: req.user.email,
        current_status: req.user.current_status,
      };
      res.status(200).json({ data: userData, message: "successful" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async getEntities(req, res) {
    try {
      const subjects = await Entities.getSubjects();
      const times = await Entities.getTimes();
      const classes = await Entities.getClasses();
      let entities = {
        subjects,
        times,
        classes,
      };
      res.status(200).json({ data: entities, message: "successful" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = users;
