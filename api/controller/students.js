const Student = require("../model/students");
const CommanFunction = require("../utils/commanFunction");
class StudentsController {
  static async studentsCreation(req, res) {
    try {
      const {
        first_name,
        last_name,
        // age,
        // address,
        email,
        // mobile,
        // subjects,
        password,
        profile,
        // gender,
      } = req.body;
      // const findUser = await Student.findOne({
      //   $or: [{ email: { $eq: email } }, { mobile: { $eq: mobile } }],
      // });
      const findUser = await Student.findOne({
        email: email,
      });
      if (findUser) {
        res
          .status(404)
          .json({ msg: "users exist use another email or mobile" });
        return;
      } else {
        const hashPass = await CommanFunction.hashPassword(password);
        const user = new Student({
          first_name,
          last_name,
          // age,
          // address,
          email,
          // mobile,
          // subjects,
          password: hashPass,
          profile,
          // gender,
        });
        const data = await user.save();
        res.status(200).json({ msg: "sucessfuly resgistered" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async studentsLogin(req, res) {
    try {
      const { email, password } = req.query;
      const findUser = await Student.findOne({ email });
      if (!findUser) {
        return res
          .status(404)
          .json({ status: false, message: "wrong credentials email/password" });
      }
      const findPass = await CommanFunction.comaprePassword(
        password,
        findUser.password
      );
      if (findPass !== true) {
        return res
          .status(404)
          .json({ status: false, message: "wrong credentials email/password" });
      } else
        res.status(200).json({
          status: true,
          message: "successfull login",
          token: await CommanFunction.token(findUser._id),
        });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async allStudents(req, res) {
    try {
      const allStudents = await Student.find();
      res.status(200).json(allStudents);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
module.exports = StudentsController;
