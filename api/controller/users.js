const CommanFunction = require("../utils/commanFunction");
const Entities = require("../services/entities");
const Users = require("../model/users");
const validator = require("email-validator");
const otpGenerator = require("otp-generator");
const MailService = require("../services/mailService");

class users {
  static async UsersCreation(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        profile,
        confirmPassword,
      } = req.body;
      const emailCheck = validator.validate(email);
      if (!emailCheck) {
        return res
          .status(400)
          .json({ status: false, message: "Not Valid Email" });
      }
      const findUser = await Users.findOne({
        email: email,
      });

      if (findUser) {
        return res.status(404).json({
          status: false,
          message: "users exist use another email or mobile",
        });
      } else {
        const hashPass = await CommanFunction.hashPassword(password);
        const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        });
        const user = new Users({
          first_name,
          last_name,
          email,
          current_status: profile == "teacher" ? "10%" : "90%",
          password: hashPass,
          profile_name: profile,
          profile_id: profile == "teacher" ? 1 : 2,
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
        // res
        //   .status(200)
        //   .json({ status: true, message: "teacher successful register" });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
  static async UsersVerify(req, res) {
    try {
      const { otp, TempEmail } = req.body;
      const findUser = await Users.findOne({
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
      await Users.findOneAndUpdate(
        { email: TempEmail },
        { verification_status: true }
      );
      res
        .status(200)
        .json({ status: true, message: "teacher successful register" });
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
  static async UsersLogin(req, res) {
    try {
      const { email, password } = req.query;
      const findUser = await Users.findOne({ email });
      if (!findUser || !findUser.verification_status) {
        return res
          .status(404)
          .json({ status: false, message: "wrong credentials email/password" });
        // return res.status(400).json({ message: "user not found" });
      }
      const findPass = await CommanFunction.comaprePassword(
        password,
        findUser.password
      );
      if (findPass !== true) {
        return res
          .status(404)
          .json({ status: false, message: "wrong credentials email/password" });
        // return res.status(400).json({ message: "wrong password" });
      } else
        res.status(200).json({
          status: true,
          message: "logged in sucessfully",
          token: await CommanFunction.token(findUser._id),
          current_status: findUser.current_status,
        });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }

  static async UpdateUser(req, res) {
    try {
      // console.log(req.body, "req.body++++++++++++++++++++++");
      if (req?.body?.landmark && req?.body?.pinCode) {
        const pin = parseInt(req?.body?.pinCode);
        const query = { pinCode: pin };
        const foundPin = await Entities.findPineCode(query);
        if (foundPin.length === 0) {
          return res
            .status(404)
            .json({ status: false, message: "enter valid pin code" });
        }
        req.body.area = foundPin[0].name;
        req.body.pin_code = foundPin[0].pinCode;
        req.body.state = foundPin[0].state;
        req.body.district = foundPin[0].district;

        const updateQueryAddress = {};
        updateQueryAddress["$push"] = { address: req.body };
        if (req.user.current_status !== "100%") {
          updateQueryAddress["$set"] = {
            current_status: req.user.profile_id == 1 ? "25%" : "100%",
          };
        }
        const updatedData = await Users.findByIdAndUpdate(
          { _id: req.user._id },
          updateQueryAddress
        );
        const status = updateQueryAddress["$set"]?.current_status
          ? updateQueryAddress["$set"]?.current_status
          : req?.user?.current_status;
        return res.status(200).json({
          status: true,
          current_status: status,
          message: "data saved successfully",
        });
      }
      if (req.user.profile_id == 1) {
        const innerUpdateQuery = {};
        if (req?.body?.times) {
          innerUpdateQuery.times = req.body.times;
          if (req.user.current_status !== "100%")
            innerUpdateQuery.current_status = "75%";
        }
        if (req?.body?.classes) {
          innerUpdateQuery.classes = req.body.classes;
          if (req.user.current_status !== "100%")
            innerUpdateQuery.current_status = "50%";
        }

        if (req?.body?.subjects) {
          innerUpdateQuery.subjects = req.body.subjects;
          if (req.user.current_status !== "100%")
            innerUpdateQuery.current_status = "100%";
        }
        const updateQuery = {
          ["$set"]: innerUpdateQuery,
        };
        // const valid = await CommanFunction.timeVerify(req.body.time);
        // if (!valid) return res.status(400).json({ message: "select valid time" });
        const EntitiesUpdatedData = await Users.findByIdAndUpdate(
          { _id: req.user._id },
          updateQuery
        );
        const entitiesStatus = innerUpdateQuery?.current_status
          ? innerUpdateQuery?.current_status
          : req?.user?.current_status;
        res.status(200).json({
          status: true,
          current_status: entitiesStatus,
          message: "data saved successfully!",
        });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
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
        email: req?.user?.email,
        current_status: req?.user?.current_status,
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
