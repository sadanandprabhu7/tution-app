import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profileImgae2 from "../images/profile2.png";
import classes from "../images/classes.png";
import times from "../images/times.png";
import subjects from "../images/subjects.png";

import { getUserProfile } from "../Redux/Actions/LoginAction";

const MyProfile = (props) => {
  const { profile } = props;
  // console.log(profile, "profile++++++++++++++++++++++++++++++");
  // console.log(props, "props++++++++++++++++++++++++++++++");
  useEffect(() => {
    if (props.current_status === false) {
      props.getUserProfile();
      console.log("inside reg useeefect +++++++++++++++++++++");
    }
  }, [props]);
  return (
    <>
      <h1>profile</h1>
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
            <h5 className="mt-0">Personal details</h5>
            <p>Hi {profile?.name}</p>
            <p>Email {profile?.email}</p>
            <Link to="/" className="stretched-link">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
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
            <h5 className="mt-0">Subject details</h5>
            {profile?.subjects?.map((paragraph) => (
              <p key={paragraph.key}>{paragraph.name}</p>
            ))}

            <Link to="/" className="stretched-link">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
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
            <h5 className="mt-0">Classes details</h5>
            {profile?.classes?.map((paragraph) => (
              <p key={paragraph.key}>{paragraph.name}</p>
            ))}

            <Link to="/" className="stretched-link">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
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
            <h5 className="mt-0">Time details</h5>
            {profile?.times?.map((paragraph) => (
              <p key={paragraph.key}>{paragraph.name}</p>
            ))}

            <Link to="/" className="stretched-link">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

MyProfile.propTypes = {
  profile: PropTypes.any,
  getUserProfile: PropTypes.func,
};

const mapStateToProps = ({ app }) => ({
  profile: app.profile,
});

export default connect(mapStateToProps, { getUserProfile })(MyProfile);
