import React, { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";

const Subjects = () => {
  const dispatch = useDispatch();

  const { status } = bindActionCreators(actionCreators, dispatch);

  const [subjectObj, setsubjectObj] = useState({});
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setsubjectObj((prevsubjectObj) => ({
      ...prevsubjectObj,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let baseUrl = "http://localhost:3000";
    console.log("Form submitted:", subjectObj);
    baseUrl = `${baseUrl}/teacher/login?email=${subjectObj.email}&password=${subjectObj.password}`;

    // const response = await fetch(baseUrl, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };
  return (
    <>
      <div className="container mt-3">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Please enter subjects
        </label> */}
            <textarea
              className="form-control"
              placeholder="please enter your teaching subject like hindi,english"
              id="exampleFormControlTextarea1"
              rows="3"
              name="subjects"
              value={subjectObj.subject}
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-success  my-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Subjects;
