// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Address from "./registration/Address";
import Classes from "./registration/Classes";
import Subjects from "./registration/Subjects";
import Times from "./registration/Times";
import MyProfile from "./MyProfile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserProfile } from "../Redux/Actions/LoginAction";

const Registration = (props) => {
  console.log(props.current_status, "current_status +++++++++++++++++++++");
  console.log(props, "props +++++++++++++++++++++");
  useEffect(() => {
    if (props.current_status === false) {
      props.getUserProfile();
      console.log("inside reg useeefect +++++++++++++++++++++");
    }
  }, [props.current_status]);

  return (
    <>
      {/* <div className="container mt-3 my-2  form-control "> */}
      <div className="container mt-3 my-2  form-control ">
        <div className="container mt-3 my-2">
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={props.current_status}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{ width: `${props.current_status}` }}
            >
              {props.current_status}
            </div>
          </div>
        </div>
      </div>
      {props.current_status === "10%" ? (
        <Address />
      ) : props.current_status === "25%" ? (
        <Classes />
      ) : props.current_status === "50%" ? (
        <Times />
      ) : props.current_status === "75%" ? (
        <Subjects />
      ) : props.current_status === "90%" &&
        props.studentDetails.profile === "student" ? (
        <Address />
      ) : (
        <MyProfile />
      )}
      {/* </div> */}
    </>
  );
};
Registration.propTypes = {
  userData: PropTypes.any,
  studentDetails: PropTypes.any,
  current_status: PropTypes.any,
  getUserProfile: PropTypes.func,
};
const mapStateToProps = ({ app }) => ({
  userData: app,
  studentDetails: app.userDetails,
  current_status: app.current_status,
});

export default connect(mapStateToProps, { getUserProfile })(Registration);
