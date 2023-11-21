import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
function Login() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const Navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can now access the form data in the formData object
    console.log("Form data:", formData);

    // Here, you can make an API call with the formData if needed
    // Example using fetch:
    let url;
    if (formData.role === "student") {
      url = `http://localhost:3000/student/login?email=${formData.email}&password=${formData.password}`;
    } else {
      url = `http://localhost:3000/teacher/login?email=${formData.email}&password=${formData.password}`;
    }
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          login(data.token);

          // localStorage.setItem("token", data.token);
          alert(`${data.message}`);
          // Navigate("/sign-up");
          Navigate("/registration");
        }
        alert(`${data.message}`);
      })
      .catch((error) => {
        alert(`${error.msg}`);
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customRadio1"
            name="role"
            value="teacher"
            checked={formData.role === "teacher"}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customRadio1">
            as Teacher
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customRadio2"
            name="role"
            value="student"
            checked={formData.role === "student"}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customRadio2">
            as Student
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default Login;
