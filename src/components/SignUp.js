import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { signUpRequest, signUpState } from "../Redux/Actions/LoginAction";

const SignUp = (props) => {
  // let navigate = useNavigate();
  const [signUpObj, setsignUpObj] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    c_password: "",
    profile: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setsignUpObj((prevSignUpObj) => ({
      ...prevSignUpObj,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (signUpObj.profile === "teacher") {
      props.signUpRequest(signUpObj);
    }
    if (signUpObj.profile === "student") {
    }
  };

  useEffect(() => {
    if (props.signUpData) {
      console.log(props.signUpData);
      if (props.signUp && props.signUpData.status) {
        alert(props.signUpData.message);
        props.signUpState();
        // navigate("/");
      } else {
        alert(props.signUpData.message);
        props.signUpState();
      }
    }
  }, [props.signUpData, props]);

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={signUpObj.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="first_name"
            className="form-control"
            id="first_name"
            name="first_name"
            value={signUpObj.first_name}
            onChange={onChangeHandler}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="last_name"
            className="form-control"
            value={signUpObj.last_name}
            onChange={onChangeHandler}
            id="last_name"
            name="last_name"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={signUpObj.password}
            onChange={onChangeHandler}
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="c_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={signUpObj.c_password}
            onChange={onChangeHandler}
            id="c_password"
            name="c_password"
          />
        </div>
        <div className="form-check form-check-inline mx-1 my-1">
          <input
            className="form-check-input"
            type="radio"
            name="profile"
            id="inlineRadio1"
            value="teacher"
            checked={signUpObj.profile === "teacher"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Teacher
          </label>
        </div>
        <div className="form-check form-check-inline mx-1 my-1">
          <input
            className="form-check-input"
            type="radio"
            name="profile"
            id="inlineRadio2"
            value="student"
            checked={signUpObj.profile === "student"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Student
          </label>
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

SignUp.propTypes = {
  signUpRequest: PropTypes.func,
  signUpData: PropTypes.any,
  signUpState: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  signUpData: app.signUp,
});

export default connect(mapStateToProps, {
  signUpState,
  signUpRequest,
})(SignUp);
