import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "./state/index";
export default function LogIn() {
  const dispatch = useDispatch();
  const { logIn } = bindActionCreators(actionCreators, dispatch);
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let baseUrl = "http://localhost:3000";
    console.log("Form submitted:", loginObj);
    let profile = "";
    if (loginObj.profile === "teacher") {
      profile = "t";
      baseUrl = `${baseUrl}/teacher/login?email=${loginObj.email}&password=${loginObj.password}`;
    }
    if (loginObj.profile === "student") {
      profile = "s";
      baseUrl = `${baseUrl}/student/login?email=${loginObj.email}&password=${loginObj.password}`;
    }
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (responseData.status) {
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("profile", profile);
      logIn(responseData.token);
      alert("successful login");
      navigate("/MyProfile");
    } else {
      alert("wrond creadentials");
    }
    console.log("Post successful:", responseData);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="mb-3">
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
}
