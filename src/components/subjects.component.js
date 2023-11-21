import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function Subjects() {
  const [selectedSubjects, setSelectedSubjects] = React.useState([]);
  const handleSubjectChange = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes("hindi")}
              onChange={() => handleSubjectChange("hindi")}
            />
          }
          label="Hindi"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes("english")}
              onChange={() => handleSubjectChange("english")}
            />
          }
          label="English"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes("history")}
              onChange={() => handleSubjectChange("history")}
            />
          }
          label="History"
        />
      </Grid>
    </Grid>
  );
}

export default Subjects;
