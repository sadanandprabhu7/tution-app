const mongoose = require("mongoose");
const Teacher = require("../model/teachers");
const CommanFunction = require("../utils/commanFunction");
const { findPineCode } = require("../utils/dbConnect");
class TeachersController {
  static async teachersCreation(req, res) {
    try {
      const {
        first_name,
        last_name,
        age,
        address,
        email,
        mobile,
        subjects,
        password,
        profile,
        gender,
        confirmPassword,
      } = req.body;
      const errors = await CommanFunction.validationCheck(
        first_name,
        last_name,
        age,
        address,
        email,
        mobile,
        subjects,
        password,
        profile,
        gender,
        confirmPassword
      );
      if (errors.length > 0) {
        return res.status(400).json({ msg: errors });
      }

      const findUser = await Teacher.findOne({
        $or: [{ email: { $eq: email } }, { mobile: { $eq: mobile } }],
      });
      if (findUser) {
        res
          .status(404)
          .json({ msg: "users exist use another email or mobile" });
        return;
      } else {
        const hashPass = await CommanFunction.hashPassword(password);
        const user = new Teacher({
          first_name,
          last_name,
          age,
          address,
          email,
          mobile,
          subjects,
          password: hashPass,
          profile,
          gender,
        });
        const data = await user.save();
        res.status(200).json({ msg: "successful register" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async teachersLogin(req, res) {
    try {
      const { email, password } = req.query;
      const findUser = await Teacher.findOne({ email });
      if (!findUser) {
        return res.status(400).json({ msg: "user not found" });
      }
      const findPass = await CommanFunction.comaprePassword(
        password,
        findUser.password
      );
      if (findPass !== true) {
        return res.status(400).json({ msg: "wrong password" });
      } else
        res.json({
          msg: "logged in sucessfully",
          token: await CommanFunction.token(findUser._id),
        });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async allTeachers(req, res) {
    try {
      const allTeachers = await Teacher.find();
      res.status(200).json(allTeachers);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async updateTeachersAddress(req, res) {
    try {
      const {
        house_number,
        street,
        landmark,
        city,
        pin_code,
        alternate_pin_code,
      } = req.body;
      const valid = await CommanFunction.addressVerify(
        house_number,
        street,
        landmark,
        city,
        pin_code,
        alternate_pin_code
      );
      if (valid.length > 0) {
        return res.status(400).json({ msg: valid[0] });
      }
      const pin = parseInt(pin_code);
      const query = { pinCode: pin };
      const foundPin = await findPineCode(query);
      if (!foundPin)
        return res.status(404).json({ msg: "enter valid pin code" });
      req.body.area = foundPin[0].name;
      req.body.pin_code = foundPin[0].pinCode;
      req.body.state = foundPin[0].state;
      req.body.district = foundPin[0].district;
      const updatedAddress = await Teacher.findByIdAndUpdate(
        { _id: req.user._id },
        {
          $push: { address: req.body },
          $set: { "status.address_status": true },
        }
      );
      console.log(updatedAddress);
      res.status(200).json({ msg: "address saved successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async updateTeachersTime(req, res) {
    try {
      const valid = await CommanFunction.timeVerify(req.body.time);
      if (!valid) return res.status(400).json({ msg: "select valid time" });
      const updateTeachersTime = await Teacher.findByIdAndUpdate(
        { _id: req.user._id },
        {
          $push: { times: req.body.time },
          $set: { "status.time_status": true },
        }
      );
      console.log(updateTeachersTime);
      res.status(200).json({ msg: "time saved successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async updateTeachersClass(req, res) {
    try {
      const valid = await CommanFunction.classVerify(req.body.class);
      if (!valid) return res.status(400).json({ msg: "select valid class" });
      const updateTeachersClass = await Teacher.findByIdAndUpdate(
        { _id: req.user._id },
        {
          $push: { classes: req.body.class },
          $set: { "status.class_status": true },
        }
      );
      console.log(updateTeachersClass);
      res.status(200).json({ msg: "class saved successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async updateTeachersSubject(req, res) {
    try {
      const valid = await CommanFunction.subjectVerify(req.body.subject);
      if (!valid) return res.status(400).json({ msg: "select valid subject" });
      const updateTeachersSubject = await Teacher.findByIdAndUpdate(
        { _id: req.user._id },
        {
          $push: { subjects: req.body.subject },
          $set: { "status.subject_status": true },
        }
      );
      console.log(updateTeachersSubject.subjects);
      res.status(200).json({ msg: "subject saved successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async teachersStatus(req, res) {
    try {
      const found = await Teacher.findById(req.user._id);
      res
        .status(200)
        .json({ data: found, info: found.status, msg: "successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async teachersDashboard(req, res) {
    try {
      const found = await Teacher.findById(req.user._id);
      const lastAddress = found.address[found.address.length - 1];
      const lastTime = found.times[found.times.length - 1];
      const lastSubject = found.subjects[found.subjects.length - 1];
      const lastClass = found.classes[found.classes.length - 1];
      found.address = lastAddress;
      found.times = lastTime;
      found.subjects = lastSubject;
      found.classes = lastClass;
      // const found = await Teacher.aggregate([
      //   { $match: { _id: req.user._id } },
      //   {
      //     $project: {
      //       profile: 1,
      //       first_name: 1,
      //       last_name: 1,
      //       email: 1,
      //       mobile: 1,
      //       lastAddress: { $arrayElemAt: ["$address", -1] },
      //       lastTime: { $arrayElemAt: ["$times", -1] },
      //       lastSubject: { $arrayElemAt: ["$subjects", -1] },
      //       lastClass: { $arrayElemAt: ["$classes", -1] },
      //     },
      //   },
      // ]);

      // const responseData = {
      //   address: found[0].lastAddress,
      //   times: found[0].lastTime,
      //   subjects: found[0].lastSubject,
      //   classes: found[0].lastClass,
      // };

      //res.status(200).json({ data: responseData, msg: "successfully" });

      res.status(200).json({ data: found, msg: "successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async teachersStatusChange(req, res) {
    try {
      const { key } = req.body;
      const query = {};
      query[`status.${key}`] = false;
      const found = await Teacher.findByIdAndUpdate(
        { _id: req.user._id },
        query,
        { new: true }
      );
      res.status(200).json({ msg: "successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
module.exports = TeachersController;
