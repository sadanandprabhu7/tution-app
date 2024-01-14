import React, { useRef } from "react";
const UpdateModal = (props) => {
  const ref = useRef(null);
  //   const { updateItems, key } = props;
  //   updateItems = (key) => {
  //     // setshowItems(key);
  //     // props.getEntities();
  //     // setSelectedclasses(props?.profile.classes);
  //     ref.current.click();
  //   };
  console.log(props, "Update model++++++++++++++++++++++++++++++++++++++");
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
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* {showItems && showItems === "C" ? (
                  <>
                    {props.entities.classes &&
                      props.entities.classes[0].classes.map((classesObj) => (
                        <div className="form-check" key={classesObj.key}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`classesObj-${classesObj.key}`}
                            checked={selectedclasses?.some(
                              (c) => c.key === classesObj.key
                            )}
                            onChange={() =>
                              handleCheckboxChanges(
                                classesObj.key,
                                classesObj.name
                              )
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`classesObj-${classesObj.key}`}
                          >
                            {classesObj.name}
                          </label>
                        </div>
                      ))}
                  </>
                ) : showItems === "S" ? (
                  <></>
                ) : showItems === "T" ? (
                  <></>
                ) : (
                  <></>
                )} */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
