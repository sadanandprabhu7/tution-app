import React, { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";
const Times = () => {
  const dispatch = useDispatch();

  const { status } = bindActionCreators(actionCreators, dispatch);

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
      time: checkedValues,
    };
    console.log(checkedValues, "checkedValues+++++++++++++++++");
    const token = localStorage.getItem("token");
    let baseUrl = "http://localhost:3000";
    baseUrl = `${baseUrl}/teachers/update/time`;
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
    status(responseData.current_status);
  };
  return (
    <div className="container mt-3">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="6 AM to 8 AM"
            id="6 AM to 8 AM"
            checked={checkedValues.includes("6 AM to 8 AM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="6 AM to 8 AM">
            6 AM to 8 AM
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="8 AM to 10 AM"
            id="8 AM to 10 AM"
            checked={checkedValues.includes("8 AM to 10 AM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="8 AM to 10 AM">
            8 AM to 10 AM
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="10 AM to 12 PM"
            id="10 AM to 12 PM"
            checked={checkedValues.includes("10 AM to 12 PM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="10 AM to 12 PM">
            10 AM to 12 PM
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="12 PM to 2 PM"
            id="12 PM to 2 PM"
            checked={checkedValues.includes("12 PM to 2 PM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="12 PM to 2 PM">
            12 PM to 2 PM
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="2 PM to 4 PM"
            id="2 PM to 4 PM"
            checked={checkedValues.includes("2 PM to 4 PM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="2 PM to 4 PM">
            2 PM to 4 PM
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="4 PM to 6 PM"
            id="4 PM to 6 PM"
            checked={checkedValues.includes("4 PM to 6 PM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="4 PM to 6 PM">
            4 PM to 6 PM
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="6 PM to 7 PM"
            id="6 PM to 7 PM"
            checked={checkedValues.includes("6 PM to 7 PM")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="6 PM to 7 PM">
            6 PM to 7 PM
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

export default Times;
