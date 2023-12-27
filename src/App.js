import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text Utils"></Navbar>
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
