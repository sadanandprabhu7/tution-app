const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  landmark: String,
  city: String,
  district: String,
  area: String,
  state: String,
  pin_code: {
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
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
    },
    pin_code: {
      type: Number,
    },
    current_status: {
      type: String,
      enum: ["10%", "25%", "50%", "75%", "90%", "100%"],
      required: true,
    },
    verification_status: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    profile_name: {
      type: String,
      enum: ["teacher", "student"],
      required: true,
    },
    profile_id: {
      type: Number,
      enum: [1, 2],
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
    subjects: [],
    classes: [],
    times: [],
    address: [addressSchema],
    created_Date: {
      type: Date,
      default: Date.now,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userSchema);
