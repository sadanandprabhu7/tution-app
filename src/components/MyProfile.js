import React, { useEffect, useState } from "react";
export default function MyProfile() {
  const [data, setData] = useState(null);
  const profile = localStorage.getItem("profile");
  const token = localStorage.getItem("token");
  // console.log(data, "data++++++++++++++++++++++");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let baseUrl = "http://localhost:3000";
        // Set loading state to true while data is being fetched
        if (profile === "t") {
          baseUrl = `${baseUrl}/teachersDashboard`;
          // console.log(baseUrl, "baseUrl+++++++++++++++++++++++++++++");
        }
        if (profile === "s") {
          baseUrl = `${baseUrl}/studentsDashboard`;
        }
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const result = await response.json();
        console.log("result successful:", result);
        setData(result.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [token, profile]);
  return (
    <>
      <div className="container form-control my-2">
        <h2 className="my-3">Personal Details</h2>
        <div className="mb-3 row">
          <label htmlFor="firstname" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly=""
              className="form-control-plaintext"
              id="firstname"
              // defaultValue={`${data?.first_name} ${data?.last_name}`}
              defaultValue={data?.first_name}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly=""
              className="form-control-plaintext"
              id="staticEmail"
              defaultValue={data?.email}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="profile" className="col-sm-2 col-form-label">
            Profile
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly=""
              className="form-control-plaintext"
              id="profile"
              defaultValue={data?.profile}
            />
          </div>
        </div>
      </div>
    </>
  );
}
