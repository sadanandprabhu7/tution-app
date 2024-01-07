// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Address from "./registration/Address";
import Classes from "./registration/Classes";
import Subjects from "./registration/Subjects";
import Times from "./registration/Times";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddressTest from "./registration/AddressTest";
import { updateTeachersAddress } from "../Redux/Actions/LoginAction";

const Registration = (props) => {
  console.log(props, "props resistratio +++++++++++++++++++++");
  return (
    <div className="container mt-3 my-2  form-control ">
      <h3>{"heading"}</h3>
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
        // <AddressTest setAddrees={updateTeachersAddress} add={props.mydetails} />
        <Address />
      ) : props.current_status === "25%" ? (
        <Classes />
      ) : props.current_status === "50%" ? (
        <Times />
      ) : props.current_status === "75%" ? (
        <Subjects />
      ) : (
        <Times />
      )}
    </div>
  );
  // }
};
Registration.propTypes = {
  userData: PropTypes.any,
  current_status: PropTypes.any,
  // updateTeachersAddress: PropTypes.func,
  // mydetails: PropTypes.any,
};
const mapStateToProps = ({ app }) => ({
  userData: app,
  current_status: app.current_status,
  // mydetails: app.mydetails,
});

export default connect(mapStateToProps, {})(Registration);
