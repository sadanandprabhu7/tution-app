import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUsers } from "../../api_operations/actions";
import { useSnackbar } from "notistack";
import { signUpState, getEntities } from "../../Redux/Actions/LoginAction";

const Classes = (props) => {
  useEffect(() => {
    if (props.entities === false) {
      props.getEntities();
    }
  }, [props.entities]);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedclasses, setSelectedclasses] = useState([
    {
      key: "key",
      name: "name",
    },
  ]);

  const handleCheckboxChanges = (key, name) => {
    const isclasseselected = selectedclasses.some(
      (subject) => subject.key === key
    );

    if (isclasseselected) {
      const updatedclasses = selectedclasses.filter(
        (subject) => subject.key !== key
      );
      setSelectedclasses(updatedclasses);
    } else {
      setSelectedclasses((prevSelectedclasses) => [
        ...prevSelectedclasses,
        { key, name },
      ]);
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const updatedclassesNew = selectedclasses.filter(
      (subject) => subject.key !== "key"
    );
    const obj = {
      classes: updatedclassesNew,
    };
    props.updateUsers(
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
        <h3>Classe Selection</h3>
        {props.entities.classes &&
          props.entities.classes[0].classes.map((classesObj) => (
            <div className="form-check" key={classesObj.key}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`classesObj-${classesObj.key}`}
                checked={selectedclasses?.some((c) => c.key === classesObj.key)}
                onChange={() =>
                  handleCheckboxChanges(classesObj.key, classesObj.name)
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
  updateUsers: PropTypes.func,
  signUpState: PropTypes.func,
  entities: PropTypes.any,
  getEntities: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  entities: app.entities,
});

export default connect(mapStateToProps, {
  updateUsers,
  signUpState,
  getEntities,
})(Classes);
