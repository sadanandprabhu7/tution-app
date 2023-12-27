import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  let navigate = useNavigate();

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
    let baseUrl = "http://localhost:3000";
    console.log("Form submitted:", signUpObj);
    if (signUpObj.profile === "teacher") {
      baseUrl = `${baseUrl}/teacher/add`;
    }
    if (signUpObj.profile === "student") {
      baseUrl = `${baseUrl}/student/add`;
    }
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpObj),
    });

    const responseData = await response.json();
    if (responseData.status) {
      navigate("/LogIn");
    }
    console.log("Post successful:", responseData);
  };
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
}
