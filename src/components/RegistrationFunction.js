import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "../App.css";
import Address from "./address";
import Times from "./times";
import Subjects from "./subjects";
import Classes from "./classes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "../components/auth/PrivateRoute";
import { AuthProvider } from "../components/auth/AuthContext";
import Registration from "../components/registration";
import { useAuth } from "../components/auth/AuthContext";

function RegistrationFunction() {
  const { token } = useAuth();

  const [current_status, setCurrent_status] = React.useState(1);
  useEffect(() => {
    // Define your API call logic here based on the current_status
    const fetchData = async () => {
      try {
        let url = `http://localhost:3000/teachers/status`;

        // Replace the following with your actual API endpoint and parameters
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        let data = await response.json();
        // data = JSON.parse(data);
        console.log("API data:", data.data.current_status);
        setCurrent_status(data.data.current_status);
        // Handle the API response as needed
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    // Call the API when the component is mounted or when current_status changes
    fetchData();
  }, [current_status]);

  return (
    <AuthProvider>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/Registration"}>
              positronX
            </Link>
            {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    update profile
                  </Link> */}
            {/* </li> */}
            {/* <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    see profile
                  </Link>
                </li> */}
            {/* </ul> */}
            {/* </div> */}
          </div>
        </nav>

        <div className="auth-wrapper">
          {/* <div className="auth-inner"> */}
          {current_status === 1 ? (
            <div>
              <h3>Fille Your Address</h3>
              <Address />
            </div>
          ) : current_status === 2 ? (
            <div>
              <h3>Choose Your Time To Teach</h3>
              <Times />
            </div>
          ) : current_status === 3 ? (
            <div>
              <h3>Select Your Time To subject</h3>
              <Subjects />
            </div>
          ) : current_status === 4 ? (
            <div>
              <h3>Select Your Classes To Teach</h3>
              <Classes />
            </div>
          ) : (
            <Times />
          )}
          {/* </div> */}
        </div>
      </div>
    </AuthProvider>
  );
}
export default RegistrationFunction;
