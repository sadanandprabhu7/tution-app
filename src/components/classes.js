import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useAuth } from "../components/auth/AuthContext";

function Classes() {
  const { token } = useAuth();
  const [selectedClasses, setselectedClasses] = useState([]);
  const handleClassesChange = (time) => {
    const updatedTimes = selectedClasses.includes(time)
      ? selectedClasses.filter((t) => t !== time)
      : [...selectedClasses, time];
    setselectedClasses(updatedTimes);
  };

  const handleSubmit = async () => {
    // Call your API with selectedClasses
    console.log("Selected Times:", selectedClasses);
    const Classes = {
      class: selectedClasses,
    };
    try {
      let url = `http://localhost:3000/teachers/update/class`;

      // Replace the following with your actual API endpoint and parameters
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(Classes),
      });
      let data = await response.json();
      // data = JSON.parse(data);
      console.log("API data:", data);
      // Handle the API response as needed
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors as needed
    }
  };
  return (
    <Grid container spacing={1} direction="column" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Grid container spacing={1}>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedClasses.includes("1 to 5")}
                  onChange={() => handleClassesChange("1 to 5")}
                />
              }
              label="1 to 5"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedClasses.includes("5 to 8")}
                  onChange={() => handleClassesChange("5 to 8")}
                />
              }
              label="5 to 8"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedClasses.includes("9 to 10")}
                  onChange={() => handleClassesChange("9 to 10")}
                />
              }
              label="9 to 10"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedClasses.includes("10 to 12")}
                  onChange={() => handleClassesChange("10 to 12")}
                />
              }
              label="10 to 12"
            />
          </Grid>{" "}
          {/* Add similar FormControlLabel components for other times */}
        </Grid>
      </Grid>

      {/* Submit button */}
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Classes;
