const Student = require("../model/students");
const CommanFunction = require("../utils/commanFunction");
const otpGenerator = require("otp-generator");

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
        res.status(404).json({
          status: false,
          message: "users exist use another email or mobile",
        });
        return;
      } else {
        const hashPass = await CommanFunction.hashPassword(password);
        const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        });
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
          otp,
        });
        let passEmailVariable = {
          userName: `${first_name} ${last_name}`,
          email: "sadanand@vaminfosys.com",
          domainName: "test",
          ServerUrl: process.env.REACT_APP_API_BASE_PATH,
          OTP: otp,
        };
        // const result = await MailService.welcomeemail(passEmailVariable);
        const result = true;
        if (!result) {
          return res.status(404).json({
            status: false,
            message: "error while sending otp",
          });
        }
        if (result) {
          await user.save();
          res.status(200).json({
            status: true,
            message: "OTP sent to your mail please check !!",
          });
        }
      }
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
  static async studentsVerify(req, res) {
    try {
      const { otp, TempProfile, TempEmail } = req.body;
      // console.log(req.body, "body verify++++++++++++++++++++++++++++++");
      const findUser = await Student.findOne({
        email: TempEmail,
      });
      if (!findUser) {
        return res.status(404).json({
          status: false,
          message: "user does not exist ",
        });
      } else if (findUser.otp !== parseInt(otp)) {
        return res.status(404).json({
          status: false,
          message: "Invalid otp",
        });
      }
      await Student.findOneAndUpdate(
        { email: TempEmail },
        { verification_status: true }
      );
      res
        .status(200)
        .json({ status: true, message: "student successful register" });
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
  static async studentsLogin(req, res) {
    try {
      console.log("inside student+++++++++++++++++++++");
      const { email, password } = req.query;
      const findUser = await Student.findOne({ email });
      if (!findUser || !findUser.verification_status) {
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
          current_status: findUser.current_status,
        });
    } catch (err) {
      res.status(500).json({ status: false, error: "Internal Server Error" });
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
