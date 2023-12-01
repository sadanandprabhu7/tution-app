import React, { useEffect } from "react";
import Address from "./address";
import Times from "./times";
import Mytbale from "../components/rendertable";
import FullWidthTabs from "../components/mydetails";
import { useAuth } from "../components/auth/AuthContext";

function Registration() {
  const { token } = useAuth();

  const [current_status, setCurrent_status] = React.useState(1);

  useEffect(() => {
    // Define your API call logic here based on the current_status
    const fetchData = async () => {
      try {
        let url = `http://localhost:3000/teachers/status`;

        // Replace the following with your actual API endpoint and parameters
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        let data = await response.json();
        // data = JSON.parse(data);
        console.log("API data:", data.data.current_status);
        setCurrent_status(data.data.current_status);
        // Handle the API response as needed
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    // Call the API when the component is mounted or when current_status changes
    fetchData();
  }, [current_status]);

  return (
    <>
      {current_status === 1 ? (
        <Address />
      ) : current_status === 2 ? (
        <Times />
      ) : (
        <Address />
      )}
    </>
  );
}

export default Registration;
