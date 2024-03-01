const nodeMailer = require("nodemailer");
const fs = require("fs");
const Handlebars = require("handlebars");
const noReplyEmailId = process.env.NO_REPLY_EMAILID;
const noReplyPassword = process.env.NO_REPLY_PASSWORD;
const hostName = process.env.HOST_NAME;
const emailPort = process.env.EMAIL_PORT;
// const WelcometemplatePath = fs.readFileSync("../Template/WelcomeEmail.html", {
//   encoding: "utf-8",
// });
const WelcometemplatePath = true;
// require("../Template/")
class MailService {
  static async welcomeemail(passEmailVariable) {
    try {
      const transporter = nodeMailer.createTransport({
        host: hostName, // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: emailPort, // port for secure SMTP
        tls: {
          ciphers: "SSLv3",
        },
        auth: {
          user: noReplyEmailId,
          pass: noReplyPassword,
        },
      });

      const template = Handlebars.compile(WelcometemplatePath);

      const passValue = passEmailVariable;
      const sendEmail = passValue.email;
      const adminEmailArr = passValue.adminEmail;
      const resultTemplateData = template(passValue);

      // Options
      const mailOptions = {
        from: noReplyEmailId,
        to: sendEmail,
        //   cc: [process.env.EMAIL_CC_ONBOARD_STATUS],
        //   bcc: [process.env.EMAIL_BCC_ONBOARD_STATUS],
        subject: "process.env.USER_CREATE_EMAIL_SUBJECT",
        html: resultTemplateData,
      };

      // delivery

      const result = await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }
}
module.exports = MailService;
// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: "noreplytution@gmail.com",
//     pass: "rgis mxfk kojd srar",
//   },
// });
// transporter.verify().then(console.log).catch(console.error);
