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
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import FindStudent from "./components/FindStudent";
// const ProtectedRoute = ({ user, redirectPath = "/landing" }) => {
//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <Outlet />;
// };

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text Utils" />
        <div className="container my-3">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/MyProfile" element={<Registration />} />
              <Route exact path="/Search" element={<FindStudent />} />

              {/* <Route exact path="/MyProfile" element={<MyProfile />} /> */}
            </Route>
            {/* <Route element={<ProtectedRoute user={user} />}>
              <Route path="home" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
