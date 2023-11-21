import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/auth/AuthContext";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Registration from "./components/registration.component";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/login"}>
                positronX
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                {/* <PrivateRoute path="/registration" element={<Registration />} /> */}

                <Route exact path="/" element={<PrivateRoute />}>
                  <Route
                    exact
                    path="/registration"
                    element={<Registration />}
                  />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
// App.js
// ... (other imports)

// App.js
// ... (other imports)

// App.js
// ... (other imports)

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//             {/* Navbar content... */}
//           </nav>

//           <div className="auth-wrapper">
//             <div className="auth-inner">
//               <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/sign-up" element={<SignUp />} />
//                 <Route exact path="/" element={<PrivateRoute />}>
//                   <Route
//                     exact
//                     path="/registration"
//                     element={<Registration />}
//                   />
//                 </Route>
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

export default App;
