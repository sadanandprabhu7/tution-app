import React, { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const Classes = () => {
  const dispatch = useDispatch();

  const [checkedValues, setCheckedValues] = useState([]);
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      checkedValues,
    };
    console.log(checkedValues, "checkedValues+++++++++++++++++");
    const token = localStorage.getItem("token");
    let baseUrl = "http://localhost:3000";
    baseUrl = `${baseUrl}/teachers/update/class`;
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(obj),
    });

    const responseData = await response.json();
    console.log(responseData, "responseData++++++++++++++++");

    localStorage.setItem("current_status", responseData.current_status);
  };
  return (
    <div className="container mt-3">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="1 to 5"
            id="1 to 5"
            checked={checkedValues.includes("1 to 5")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="1 to 5">
            1 to 5
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="5 to 8"
            id="5 to 8"
            checked={checkedValues.includes("5 to 8")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="5 to 8">
            5 to 8
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="9 to 10"
            id="9 to 10"
            checked={checkedValues.includes("9 to 10")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="9 to 10">
            9 to 10
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="10 to 12"
            id="10 to 12"
            checked={checkedValues.includes("10 to 12")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="10 to 12">
            10 to 12
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

export default Classes;
