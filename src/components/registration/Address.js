import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTeachersAddress } from "../../api_operations/actions";
import { signUpState } from "../../Redux/Actions/LoginAction";

import { useSnackbar } from "notistack";
const Address = (props) => {
  const { enqueueSnackbar } = useSnackbar();

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
    props.updateTeachersAddress(
      address,
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

Address.propTypes = {
  updateTeachersAddress: PropTypes.func,
  signUpState: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  userData: app,
});

export default connect(mapStateToProps, {
  updateTeachersAddress,
  signUpState,
})(Address);
