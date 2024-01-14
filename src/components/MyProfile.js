import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profileImgae2 from "../images/profile2.png";
import classes from "../images/classes.png";
import times from "../images/times.png";
import subjects from "../images/subjects.png";
import {
  updateTeachersClass,
  updateTeachersSubject,
  updateTeachersTime,
  updateTeachersAddress,
} from "../api_operations/actions";
import { useSnackbar } from "notistack";

import { getUserProfile, getEntities } from "../Redux/Actions/LoginAction";

const MyProfile = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const ref = useRef(null);
  const refClose = useRef(null);
  console.log(props, "props+++++++++++++++++++++++++++++ for subjects ");
  const { profile } = props;
  const [selectedItems, setselectedItems] = useState();
  const [initialEntities, setinitialEntities] = useState();

  const [itemKey, setitemKey] = useState(null);
  const handleCheckboxChanges = (key, name) => {
    const isclasseselected = selectedItems.some(
      (subject) => subject.key === key
    );

    if (isclasseselected) {
      const updatedclasses = selectedItems.filter(
        (subject) => subject.key !== key
      );
      setselectedItems(updatedclasses);
    } else {
      setselectedItems((prevselectedItems) => [
        ...prevselectedItems,
        { key, name },
      ]);
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setinitialEntities((prevaddress) => ({
      ...prevaddress,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (props.current_status === false) {
      props.getUserProfile();
    }
    if (props.entities === false) {
      props.getEntities();
    }
  }, [props]);
  const updateClasses = (key) => {
    if (key === "C") {
      setinitialEntities(props.entities.classes[0].classes);
      setselectedItems(props?.profile.classes);
    }
    if (key === "S") {
      setinitialEntities(props.entities.subjects[0].subjects);
      setselectedItems(props?.profile.subjects);
    }
    if (key === "T") {
      setinitialEntities(props.entities.times[0].times);
      setselectedItems(props?.profile.times);
    }
    if (key === "A") {
      setinitialEntities({
        landmark: props.profile.address.landmark,
        pinCode: props.profile.address.pin_code,
      });
      // setselectedItems(props?.profile.times);
    }
    setitemKey(key);
    ref.current.click();
  };
  const saveUpdateHandler = async (e) => {
    e.preventDefault();
    const obj = {};
    if (itemKey === "C") {
      obj["classes"] = selectedItems;
      props.updateTeachersClass(
        obj,
        (res) => {
          if (res?.status === true) {
            // props.signUpState(res.current_status);
            enqueueSnackbar(`${res.message}`, {
              variant: "success",
            });
            props.getUserProfile();

            refClose.current.click();
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
    }
    if (itemKey === "S") {
      obj["subjects"] = selectedItems;
      props.updateTeachersSubject(
        obj,
        (res) => {
          if (res?.status === true) {
            // props.signUpState(res.current_status);
            enqueueSnackbar(`${res.message}`, {
              variant: "success",
            });
            props.getUserProfile();
            refClose.current.click();
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
    }
    if (itemKey === "T") {
      obj["times"] = selectedItems;
      props.updateTeachersTime(
        obj,
        (res) => {
          if (res?.status === true) {
            // props.signUpState(res.current_status);
            enqueueSnackbar(`${res.message}`, {
              variant: "success",
            });
            props.getUserProfile();
            refClose.current.click();
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
    }
    if (itemKey === "A") {
      props.updateTeachersAddress(
        initialEntities,
        (res) => {
          if (res?.status === true) {
            // props.signUpState(res.current_status);
            enqueueSnackbar(`${res.message}`, {
              variant: "success",
            });
            props.getUserProfile();
            refClose.current.click();
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
    }
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {itemKey && itemKey === "C" ? (
                    "Update Classes"
                  ) : itemKey === "S" ? (
                    "Update Subjects"
                  ) : itemKey === "T" ? (
                    "Update Times"
                  ) : (
                    <></>
                  )}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {itemKey === "A" ? (
                  <>
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                          Landmark
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="landmark"
                          id="inputCity"
                          value={initialEntities.landmark}
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
                          value={initialEntities.pinCode}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </form>
                  </>
                ) : (
                  initialEntities &&
                  initialEntities.map((itemObj) => (
                    <div className="form-check" key={itemObj.key}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`itemObj-${itemObj.key}`}
                        checked={selectedItems?.some(
                          (c) => c.key === itemObj.key
                        )}
                        onChange={() =>
                          handleCheckboxChanges(itemObj.key, itemObj.name)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`itemObj-${itemObj.key}`}
                      >
                        {itemObj.name}
                      </label>
                    </div>
                  ))
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary d-none"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={saveUpdateHandler}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Personal details
              {/* <h5 className="mt-0">Personal details</h5> */}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            // style={""}
          >
            <div className="accordion-body">
              <div className="container form-control my-2">
                <div className="d-flex position-relative">
                  <img
                    src={profileImgae2}
                    width="100"
                    height="100"
                    className="flex-shrink-0 me-3"
                    alt="..."
                  />
                  <div>
                    {/* <h5 className="mt-0">Personal details</h5> */}
                    <p key={"Hi"}>Hi {profile?.name}</p>
                    <p key={"Email"}>Email {profile?.email}</p>
                    <p key={"Area"}>Area - {profile?.address?.area}</p>
                    <p key={"Landmark"}>
                      Landmark - {profile?.address?.landmark}
                    </p>
                    <p key={"District"}>
                      District - {profile?.address?.district}
                    </p>
                    <p key={"State"}>State - {profile?.address?.state}</p>
                    <p key={"Pin"}>Pin Code - {profile?.address?.pin_code}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => updateClasses("A")}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Subject details
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            // style={""}
          >
            <div className="accordion-body">
              {/* <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow. */}
              <div className="container form-control my-2">
                <div className="d-flex position-relative">
                  <img
                    src={subjects}
                    width="100"
                    height="100"
                    className="flex-shrink-0 me-3"
                    alt="..."
                  />
                  <div>
                    {/* <h5 className="mt-0">Subject details</h5> */}
                    {profile?.subjects?.map((paragraph) => (
                      <p key={paragraph.key}>{paragraph.name}</p>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => updateClasses("S")}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Classes details{" "}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            // style={""}
          >
            <div className="accordion-body">
              <div className="container form-control my-2">
                <div className="d-flex position-relative">
                  <img
                    src={classes}
                    width="100"
                    height="100"
                    className="flex-shrink-0 me-3"
                    alt="..."
                  />
                  <div>
                    {/* <h5 className="mt-0">Classes details</h5> */}
                    {profile?.classes?.map((paragraph) => (
                      <p key={paragraph.key}>{paragraph.name}</p>
                    ))}

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => updateClasses("C")}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Time details
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            // style={""}
          >
            <div className="accordion-body">
              <div className="container form-control my-2">
                <div className="d-flex position-relative">
                  <img
                    src={times}
                    width="100"
                    height="100"
                    className="flex-shrink-0 me-3"
                    alt="..."
                  />
                  <div>
                    {/* <h5 className="mt-0">Time details</h5> */}
                    {profile?.times?.map((paragraph) => (
                      <p key={paragraph.key}>{paragraph.name}</p>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => updateClasses("T")}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyProfile.propTypes = {
  profile: PropTypes.any,
  getUserProfile: PropTypes.func,
  getEntities: PropTypes.func,
  entities: PropTypes.any,
  UpdateModal: PropTypes.func,
  updateTeachersClass: PropTypes.func,
  updateTeachersSubject: PropTypes.func,
  updateTeachersTime: PropTypes.func,
  updateTeachersAddress: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  profile: app.profile,
  entities: app.entities,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getEntities,
  updateTeachersClass,
  updateTeachersSubject,
  updateTeachersTime,
  updateTeachersAddress,
})(MyProfile);
