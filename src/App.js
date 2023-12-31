import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import MyProfile from "./components/MyProfile";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Registration from "./components/Registration";
function App() {
  const status = useSelector((state) => state.status);
  return (
    <>
      <Router>
        <Navbar title="Text Utils" />
        <div className="container my-3">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                exact
                path="/MyProfile"
                element={status === "100%" ? <MyProfile /> : <Registration />}
              />
              {/* <Route exact path="/MyProfile" element={<MyProfile />} /> */}
            </Route>

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
