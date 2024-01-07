import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTeachersClass } from "../../api_operations/actions";
import { useSnackbar } from "notistack";
import { signUpState } from "../../Redux/Actions/LoginAction";

const Classes = (props) => {
  const { enqueueSnackbar } = useSnackbar();
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
    props.updateTeachersClass(
      obj,
      (res) => {
        if (res?.status === true) {
          props.signUpState(res.current_status);
          enqueueSnackbar(`${res.message}`, {
            variant: "success",
          });
        } else {
          enqueueSnackbar(`${res.message}`, {
            variant: "error",
          });
        }
      },
      (err) => {
        enqueueSnackbar(`${err.message}`, {
          variant: "error",
        });
      }
    );
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

Classes.propTypes = {
  updateTeachersClass: PropTypes.func,
  signUpState: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  userData: app,
});

export default connect(mapStateToProps, { updateTeachersClass, signUpState })(
  Classes
);
