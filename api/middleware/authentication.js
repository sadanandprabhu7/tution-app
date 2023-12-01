const Teacher = require("../model/teachers");
const Student = require("../model/students");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
class Authorization {
  static async verifyToken(token, key) {
    try {
      const decoded = await jwt.verify(token, key);
      return decoded;
    } catch (error) {
      return "invalid token";
    }
  }
  static async teachersAuthentication(req, res, next) {
    try {
      const token = req.headers.authorization
        ? req.headers.authorization
        : null;
      if (!token) return res.status(403).json({ msg: "please login again" });
      const key = process.env.SECRETE_KEY_JWT;
      const verified = await Authorization.verifyToken(token, key);
      if (verified === "invalid token")
        return res
          .status(403)
          .json({ status: false, msg: "Authentication failed" });
      const { id } = verified;
      if (id) {
        const teacher = await Teacher.findById(id);
        req.user = teacher;
        next();
      }
    } catch (err) {
      res.status(500).json({ msg: "server error" });
    }
  }
  static async studentsAuthentication(req, res, next) {
    try {
      const token = req.headers.authorization
        ? req.headers.authorization
        : null;
      if (!token) return res.status(403).json({ msg: "please login again" });
      const key = process.env.SECRETE_KEY_JWT;
      const verified = await Authorization.verifyToken(token, key);
      if (verified === "invalid token")
        return res
          .status(403)
          .json({ status: false, msg: "Authentication failed" });
      const { id } = verified;
      if (id) {
        const teacher = await Student.findById(id);
        req.user = teacher;
        next();
      }
    } catch (err) {
      res.status(500).json({ msg: "server error" });
    }
  }
}
module.exports = Authorization;
