import React, { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";

const Address = () => {
  const dispatch = useDispatch();

  const { status } = bindActionCreators(actionCreators, dispatch);

  const [address, setaddress] = useState({
    landmark: "",
    pinCode: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setaddress((prevaddress) => ({
      ...prevaddress,
      [name]: value,
    }));
  };

  const saveAddressHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(address, "address++++++++++++++++");
    let baseUrl = "http://localhost:3000";
    baseUrl = `${baseUrl}/teachers/update/address`;
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(address),
    });

    const responseData = await response.json();
    status(responseData.current_status);
    localStorage.setItem("current_status", responseData.current_status);
    console.log(responseData, "address++++++++++++++++");
  };
  return (
    <div className="container form-control">
      <form onSubmit={saveAddressHandler} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Landmark
          </label>
          <input
            type="text"
            className="form-control"
            name="landmark"
            id="inputCity"
            value={address.landmark}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            name="pinCode"
            id="inputZip"
            value={address.pinCode}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            save address
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
