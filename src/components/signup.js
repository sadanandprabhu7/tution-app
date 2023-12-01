import React, { useState } from "react";
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

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
    fetch("your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

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
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;
