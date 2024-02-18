const mongoose = require("mongoose");

const verifyEmailSchema = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    profile: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    created_Date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Verify_Email" }
);

module.exports = mongoose.model("Verify_Email", verifyEmailSchema);
