import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTeachersAddress } from "../../Redux/Actions/LoginAction";
const Address = (props) => {
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
  console.log(props.mydetails, "props.mydetails+++++++++++++++++");

  const [intialaddress, setintialaddress] = useState(props.mydetails.data);
  console.log(intialaddress, "intialaddress.intialaddress+++++++++++++++++");

  const saveAddressHandler = async (e) => {
    e.preventDefault();
    props.updateTeachersAddress(address);
  };
  useEffect(() => {
    console.log(props.mydetails, "props.mydetails+++++++++++++++++");
    if (props.mydetails !== false) {
      if (props.mydetails && props.mydetails.status) {
        console.log(
          props.mydetails.message,
          "props.mydetails.message++++++++++++++++++++++"
        );

        // alert(props.mydetails.message);
      } else {
        console.log(
          props.mydetails.message,
          "props.mydetails.message++++++++++++++++++++++"
        );

        // alert(props.mydetails.message);
      }
    }
  }, [intialaddress, props]);
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
  mydetails: PropTypes.any,
};

const mapStateToProps = ({ app }) => ({
  mydetails: app.mydetails,
});

export default connect(mapStateToProps, { updateTeachersAddress })(Address);
