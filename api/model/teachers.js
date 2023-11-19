const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  house_number: String,
  street: String,
  landmark: String,
  city: String,
  district: String,
  area: String,
  state: String,
  pin_code: {
    type: Number,
  },
  alternate_pin_code: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: undefined,
  },
});

const TeacherSchema = new mongoose.Schema({
  status: {
    address_status: {
      type: Boolean,
      default: false,
    },
    time_status: {
      type: Boolean,
      default: false,
    },
    class_status: {
      type: Boolean,
      default: false,
    },
    subject_status: {
      type: Boolean,
      default: false,
    },
  },
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
  },
  gender: {
    type: String,
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
  subjects: [],
  classes: [],
  times: [],
  address: [addressSchema],
});

const Teacher = mongoose.model("teachers", TeacherSchema);
module.exports = Teacher;
