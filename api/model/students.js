const mongoose = require("mongoose");

const StudendSchema = new mongoose.Schema({
  profile: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    //  required : true
  },
  gender: {
    type: String,
    //required : true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    // required: true,
  },
  subjects: [String],
  class: {
    type: String,
  },
  address: {
    houseFlatNumber: String,
    street: String,
    city: String,
    district: String,
    state: String,
    pin_code: {
      type: Number,
      // required:true
    },
    landmark: String,
  },
});

const Student = mongoose.model("students", StudendSchema);
module.exports = Student;
