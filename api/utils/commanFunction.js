const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class CommanFunction {
  static async token(id) {
    const data = jwt.sign({ id }, process.env.SECRETE_KEY_JWT);
    return data;
  }
  static async hashPassword(pass) {
    let salt = parseInt(process.env.SALT);
    const hashPass = await bcrypt.hash(pass, salt);
    return hashPass;
  }
  static async comaprePassword(pass, hash) {
    const match = await bcrypt.compare(pass, hash);
    return match;
  }
  static async validationCheck(
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
  ) {
    const errors = [];
    // Check if any of the fields are empty
    if (
      !profile ||
      !gender ||
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !mobile ||
      !confirmPassword
    ) {
      errors.push("Please fill in all the required fields.");
    }

    // Validate profile (only "teacher" or "student" allowed)
    if (profile !== "teacher" && profile !== "student") {
      errors.push('Profile should be either "teacher" or "student".');
    }

    // Validate gender (only "male" or "female" allowed)
    if (gender !== "male" && gender !== "female") {
      errors.push('Gender should be either "male" or "female".');
    }

    // Validate names (should contain only alphabetic characters)
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(first_name) || !nameRegex.test(last_name)) {
      errors.push(
        "First name and last name should only contain alphabetic characters."
      );
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // Validate mobile number (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      errors.push("Please enter a valid 10-digit mobile number.");
    }

    // Validate age (between 10 and 70)
    // const parsedAge = parseInt(age, 10);
    // if (isNaN(parsedAge) || parsedAge < 10 || parsedAge > 70) {
    //   errors.push('Age should be between 10 and 70.');
    // }

    // Validate password and confirmPassword match
    if (password !== confirmPassword) {
      errors.push("Password and confirm password should match.");
    }
    return errors;
  }

  static async addressVerify(
    // house_number,
    // street,
    landmark,
    city,
    pin_code,
    alternate_pin_code
  ) {
    const error = [];
    if (
      // !house_number ||
      // !street ||
      !landmark ||
      !city ||
      !pin_code ||
      !alternate_pin_code
    ) {
      error.push("Please fill in all the required fields.");
    }
    const patter = /^[a-zA-Z0-9]+$/;
    if (!patter.test(house_number)) error.push("enter valid house number");
    if (!patter.test(street)) error.push("enter valid street");
    if (!patter.test(landmark)) error.push("enter valid landmark");
    if (!patter.test(city)) error.push("enter valid city");

    const pinPattern = /^\d{6}$/;

    if (!pinPattern.test(pin_code)) error.push("enter valid pin code");
    if (!pinPattern.test(alternate_pin_code))
      error.push("enter valid alternate_pin_code");

    return error;
  }
  static async timeVerify(givenTime) {
    if (!givenTime.length) return false;
    const originalTime = [
      "6 AM to 8 AM",
      "8 AM to 10 AM",
      "10 AM to 12 PM",
      "12 PM to 2 PM",
      "2 PM to 4 PM",
      "4 PM to 6 PM",
      "6 PM to 7 PM",
    ];
    return givenTime.every((ele) => originalTime.includes(ele));
  }
  static async classVerify(givenClass) {
    if (!givenClass.length) return false;
    const originalClass = ["1 to 5", "5 to 8", "9 to 10", "10 to 12"];
    return givenClass.every((ele) => originalClass.includes(ele));
  }
  static async subjectVerify(givenSubject) {
    if (!givenSubject.length) return false;
    const originalSubject = [
      "English",
      "Hindi (or other regional language)",
      "Mathematics",
      "Science (including Physics, Chemistry, and Biology)",
      "Social Studies (including History, Geography, and Civics)",
      "Environmental Studies (in lower grades)",
      "Computer Science (from middle school onwards)",
      "Physical Education (including sports and exercises)",
      "Art and Craft",
      "Music",
      "Dance",
      "Moral Science/Ethics",
      "Sanskrit",
      "Foreign Languages (such as French, German, or Spanish; optional in some schools)",
      "Economics (from high school onwards)",
      "Business Studies (from high school onwards)",
      "Accountancy (from high school onwards)",
      "Psychology (from high school onwards)",
      "Political Science (from high school onwards)",
      "Sociology (from high school onwards)",
      "Home Science (optional in some schools)",
      "Legal Studies (from high school onwards, optional in some schools)",
      "Physical Education (from high school onwards)",
      "Scratch",
      "Python",
      "Scratch",
      "Java",
      "C++",
      "HTML/CSS",
      "JavaScript",
      "SQL",
      "Visual Basic",
      "Ruby",
      "PHP",
    ];
    return givenSubject.every((ele) => originalSubject.includes(ele));
  }
}
module.exports = CommanFunction;
