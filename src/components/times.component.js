import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function Times() {
  const [selectedTimes, setselectedTimes] = React.useState([]);
  console.log(selectedTimes, "selectedTimes++++++++++++");
  const handleTimesChange = (times) => {
    if (selectedTimes.includes(times)) {
      setselectedTimes(selectedTimes.filter((item) => item !== times));
    } else {
      setselectedTimes([...selectedTimes, times]);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={1}>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("11 AM")}
                  onChange={() => handleTimesChange("11 AM")}
                />
              }
              label="11 AM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("12 PM")}
                  onChange={() => handleTimesChange("12 PM")}
                />
              }
              label="12 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedTimes.includes("6 PM")}
                  onChange={() => handleTimesChange("6 PM")}
                />
              }
              label="6 PM"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Times;
