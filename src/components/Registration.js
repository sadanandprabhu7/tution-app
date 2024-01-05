import React, { useEffect } from "react";
import Address from "./registration/Address";
import Classes from "./registration/Classes";
import Subjects from "./registration/Subjects";
import Times from "./registration/Times";
import { useSelector } from "react-redux";

const Registration = () => {
  const status = useSelector((state) => state.status);
  console.log(status, "status++++++++++++++++++++++++++++++");
  let process = status;
  let div = "";
  let heading = "";

  if (process === "10%") {
    div = <Address />;
    heading = "fill your address";
  }
  if (process === "25%") {
    div = <Classes />;
    heading = "choose your classes";
  }
  if (process === "50%") {
    div = <Times />;
    heading = "choose your Times";
  }
  if (process === "75%") {
    div = <Subjects />;
    heading = "choose your subjects";
  }
  // if (process === "100%") {
  //   div = <Subjects />;
  //   heading = "choose your subjects";
  // }

  return (
    <div className="container mt-3 my-2  form-control ">
      <h3>{heading}</h3>
      <div className="container mt-3 my-2  form-control ">
        <div className="container mt-3 my-2">
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={process}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: `${process}` }}>
              {process}
            </div>
          </div>
        </div>
      </div>
      {div}
    </div>
  );
};

export default Registration;
