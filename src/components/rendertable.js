import React, { useState } from "react";
import UserProfileTable from "./CustomTable";

const Mytbale = () => {
  const initialUserData = {
    name: "John Doe",
    address: "123 Main St",
    mobile: "555-1234",
    // Add more fields as needed
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleUpdate = (field, value) => {
    setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfileTable userData={userData} onUpdate={handleUpdate} />
    </div>
  );
};

export default Mytbale;
