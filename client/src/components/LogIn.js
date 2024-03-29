// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../Redux/Actions/LoginAction";
import { useSnackbar } from "notistack";
import { getUserProfile } from "../Redux/Actions/LoginAction";
import { getEntities } from "../Redux/Actions/LoginAction";
// import { isExpired, decodeToken } from "react-jwt";
const LogIn = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const [loginObj, setloginObj] = useState({
    email: "",
    password: "",
    profile: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setloginObj((prevloginObj) => ({
      ...prevloginObj,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (props.userLoginData) {
      if (props.userLoginData && props.userLoginData.status) {
        localStorage.clear();
        localStorage.setItem("token", props.userLoginData.token);
        localStorage.setItem(
          "current_status",
          props.userLoginData.current_status
        );
        enqueueSnackbar(`${props.userLoginData.message}`, {
          variant: "success",
        });
        props.getUserProfile();
        props.getEntities();
        navigate("/MyProfile");
      } else {
        enqueueSnackbar(`${props.userLoginData.message}`, {
          variant: "error",
        });
      }
    }
  }, [props.userLoginData]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    props.loginRequest(loginObj);
  };
  return (
    <div className="container-sm">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="col-mb-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={loginObj.email}
            onChange={onChangeHandler}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={loginObj.password}
            onChange={onChangeHandler}
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="form-check form-check-inline mx-1 my-1">
          <input
            className="form-check-input"
            type="radio"
            name="profile"
            id="inlineRadio1"
            value="teacher"
            checked={loginObj.profile === "teacher"}
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
            checked={loginObj.profile === "student"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Student
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-success mx-2 my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
LogIn.propTypes = {
  loginRequest: PropTypes.func,
  getUserProfile: PropTypes.func,
  getEntities: PropTypes.func,
  userLoginData: PropTypes.any,
};

const mapStateToProps = ({ app }) => ({
  userLoginData: app.userLoginData,
});

export default connect(mapStateToProps, {
  loginRequest,
  getUserProfile,
  getEntities,
})(LogIn);
