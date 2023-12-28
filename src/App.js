import React, { useState, useEffect } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavbarInside from "./components/NavbarInside";
import MyProfile from "./components/MyProfile";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Navbar title="Text Utils" isLoggedIn={isLoggedIn} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route
              exact
              path="/LogIn"
              render={(props) => (
                <LogIn {...props} onLogin={() => setLoggedIn(true)} />
              )}
            />
            <Route exact path="/MyProfile" element={<MyProfile />} />
            <Route exact path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
