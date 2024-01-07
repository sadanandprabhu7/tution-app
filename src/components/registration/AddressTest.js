import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const AddressTest = (props) => {
  const { setAddrees, add } = props;
  console.log(add, "props.addresstest.message++++++++++++++++++++++");

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
  // const [intialaddress, setintialaddress] = useState(add);
  const saveAddressHandler = async (e) => {
    e.preventDefault();
    setAddrees(address);
  };
  useEffect(() => {
    console.log("props.address1+++++++++++++++++");
    if (add != false) {
      console.log(add, "props.address2+++++++++++++++++");

      if (add && add.status) {
        // console.log(add.message, "add.message++++++++++++++++++++++");
        console.log(add, "props.address3+++++++++++++++++");

        alert(add.message);
      } else {
        // console.log(add.message, "add.message++++++++++++++++++++++");

        alert(add.message);
      }
    }
  }, [add, props]);
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

// AddressTest.propTypes = {
//   updateTeachersAddress: PropTypes.func,
//   address: PropTypes.any,
// };

// const mapStateToProps = ({ app }) => ({
//   address: app.address,
// });

// export default connect(mapStateToProps, {})(AddressTest);
export default AddressTest;
