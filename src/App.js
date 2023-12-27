import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavbarInside from "./components/NavbarInside";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Router>
        {token ? <NavbarInside /> : <Navbar title="Text Utils" />}
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
