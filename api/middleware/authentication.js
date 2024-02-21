const Users = require("../model/users");
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
  static async Authentication(req, res, next) {
    try {
      const token = req.headers.authorization
        ? req.headers.authorization
        : null;
      if (!token)
        return res.status(403).json({ message: "please login again" });
      const key = process.env.SECRETE_KEY_JWT;
      const verified = await Authorization.verifyToken(token, key);
      if (verified === "invalid token")
        return res
          .status(403)
          .json({ status: false, message: "Authentication failed" });
      const { id } = verified;
      if (id) {
        const user = await Users.findById(id);
        req.user = user;
        next();
      }
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  }
}
module.exports = Authorization;
