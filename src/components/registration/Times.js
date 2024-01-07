import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTeachersTime } from "../../api_operations/actions";
import { useSnackbar } from "notistack";
import { signUpState } from "../../Redux/Actions/LoginAction";
const Times = (props) => {
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
      time: checkedValues,
    };
    props.updateTeachersTime(
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

Times.propTypes = {
  updateTeachersTime: PropTypes.func,
  signUpState: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  userData: app,
});

export default connect(mapStateToProps, { updateTeachersTime, signUpState })(
  Times
);
