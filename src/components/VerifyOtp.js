import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { teacherVerifyOtp, studentVerifyOtp } from "../api_operations/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const VerifyOtp = (props) => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [otp, setotp] = useState({
    otp: "",
  });
  const onChangeHandler = (e) => {
    console.log("insdie ++++++++++++++ on chnage");
    const { name, value } = e.target;
    setotp((prevSignUpObj) => ({
      ...prevSignUpObj,
      [name]: value,
    }));
  };
  const TempProfile = localStorage.getItem("TempProfile");
  const TempEmail = localStorage.getItem("TempEmail");

  const onSubmitHandler = async (e) => {
    console.log("inside ++++++++++++++++++++++++++");
    e.preventDefault();
    if (!TempProfile && !TempEmail) {
      enqueueSnackbar(`error while verifying otp`, {
        variant: "error",
      });
    } else {
      const verifyCall =
        TempProfile === "teacher"
          ? props.teacherVerifyOtp
          : props.studentVerifyOtp;
      const obj = {
        otp: otp.otp,
        TempProfile: TempProfile,
        TempEmail: TempEmail,
      };
      console.log(obj, "obj++++++++++++++++++");
      verifyCall(
        obj,
        (res) => {
          if (res?.status === true) {
            enqueueSnackbar(`${res.message}`, {
              variant: "success",
            });
            navigate("/Login");
          } else {
            enqueueSnackbar(`${res.message}`, {
              variant: "error",
            });
          }
        },
        (err) => {
          enqueueSnackbar(`${err.message}`, {
            variant: "error",
          });
        }
      );
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="mb-3 ">
          <label htmlFor="otp" className="form-label">
            Enter OTP *opt sent to your Email
          </label>
          <input
            type="otp"
            className="form-control"
            id="otp"
            name="otp"
            aria-describedby="otpHelp"
            value={otp.otp}
            onChange={onChangeHandler}
          />
        </div>
        <div className="container">
          <button type="submit" className="btn btn-primary btn-sm my-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
VerifyOtp.propTypes = {
  teacherVerifyOtp: PropTypes.func,
  studentVerifyOtp: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  userData: app,
});

export default connect(mapStateToProps, {
  teacherVerifyOtp,
  studentVerifyOtp,
})(VerifyOtp);
