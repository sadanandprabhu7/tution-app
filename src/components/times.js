import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useAuth } from "../components/auth/AuthContext";

function Times() {
  const { token } = useAuth();

  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTimesChange = (time) => {
    const updatedTimes = selectedTimes.includes(time)
      ? selectedTimes.filter((t) => t !== time)
      : [...selectedTimes, time];
    setSelectedTimes(updatedTimes);
  };

  const handleSubmit = async () => {
    // Call your API with selectedTimes
    console.log("Selected Times:", selectedTimes);
    const Times = {
      time: selectedTimes,
    };
    try {
      let url = `http://localhost:3000/teachers/update/time`;

      // Replace the following with your actual API endpoint and parameters
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(Times),
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
                  checked={selectedTimes.includes("6 AM to 8 AM")}
                  onChange={() => handleTimesChange("6 AM to 8 AM")}
                />
              }
              label="6 AM to 8 AM"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("8 AM to 10 AM")}
                  onChange={() => handleTimesChange("8 AM to 10 AM")}
                />
              }
              label="8 AM to 10 AM"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("10 AM to 12 PM")}
                  onChange={() => handleTimesChange("10 AM to 12 PM")}
                />
              }
              label="10 AM to 12 PM"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("12 PM to 2 PM")}
                  onChange={() => handleTimesChange("12 PM to 2 PM")}
                />
              }
              label="12 PM to 2 PM"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("2 PM to 4 PM")}
                  onChange={() => handleTimesChange("2 PM to 4 PM")}
                />
              }
              label="2 PM to 4 PM"
            />
          </Grid>{" "}
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("4 PM to 6 PM")}
                  onChange={() => handleTimesChange("4 PM to 6 PM")}
                />
              }
              label="4 PM to 6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM to 7 PM")}
                  onChange={() => handleTimesChange("6 PM to 7 PM")}
                />
              }
              label="6 PM to 7 PM"
            />
          </Grid>
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

export default Times;
