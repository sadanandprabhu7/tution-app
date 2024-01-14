import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTeachersSubject } from "../../api_operations/actions";
import { useSnackbar } from "notistack";
import {
  signUpState,
  getUserProfile,
  getEntities,
} from "../../Redux/Actions/LoginAction";
const Subjects = (props) => {
  // let masterSubjects = props?.entities?.subjects[0]?.subjects;
  useEffect(() => {
    if (props.entities === false) {
      props.getEntities();
      setSelectedSubjects(props.userData.profile.subjects);
    }
  }, [props.entities, props.userData.profile.subjects]);
  // useEffect(() => {
  //   if (props.buttonValue === "update") {
  //     setSelectedSubjects(props.oldData);
  //   }
  // }, [props.buttonValue]);
  const [selectedSubjects, setSelectedSubjects] = useState(
    props.userData.profile.subjects
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleCheckboxChanges = (key, name) => {
    const isSubjectSelected = selectedSubjects.some(
      (subject) => subject.key === key
    );

    if (isSubjectSelected) {
      const updatedSubjects = selectedSubjects.filter(
        (subject) => subject.key !== key
      );
      setSelectedSubjects(updatedSubjects);
    } else {
      setSelectedSubjects((prevSelectedSubjects) => [
        ...prevSelectedSubjects,
        { key, name },
      ]);
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(selectedSubjects, "selectedSubjects++++++++++++++++++++++++++");
    const obj = {
      subject: selectedSubjects,
    };
    props.updateTeachersSubject(
      obj,
      (res) => {
        if (res?.status === true) {
          props.signUpState(res.current_status);
          props.getUserProfile();
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
        <h3>Subject Selection</h3>
        {props.entities.subjects &&
          props.entities.subjects[0].subjects.map((subject) => (
            <div className="form-check" key={subject.key}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`subject-${subject.key}`}
                checked={selectedSubjects?.some((s) => s.key === subject.key)}
                onChange={() =>
                  handleCheckboxChanges(subject.key, subject.name)
                }
              />
              <label
                className="form-check-label"
                htmlFor={`subject-${subject.key}`}
              >
                {subject.name}
              </label>
            </div>
          ))}

        <div>
          <button type="submit" className="btn btn-success mx-2 my-3">
            Submit
          </button>
          {/* {props.buttonValue && props.buttonValue === "update" ? (
            <></>
          ) : (
            <button type="submit" className="btn btn-success mx-2 my-3">
              Submit
            </button>
          )} */}
        </div>
      </form>
    </div>
  );
};

Subjects.propTypes = {
  updateTeachersSubject: PropTypes.func,
  signUpState: PropTypes.func,
  getUserProfile: PropTypes.func,
  entities: PropTypes.any,
  userData: PropTypes.any,
};

const mapStateToProps = ({ app }) => ({
  userData: app,
  entities: app.entities,
  getEntities: PropTypes.func,
});

export default connect(mapStateToProps, {
  updateTeachersSubject,
  signUpState,
  getUserProfile,
  getEntities,
})(Subjects);
