// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// function Subjects() {

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={selectedSubjects.includes("English")}
//               onChange={() => handleSubjectChange("English")}
//             />
//           }
//           label="English"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={selectedSubjects.includes(
//                 "Hindi (or other regional language)"
//               )}
//               onChange={() =>
//                 handleSubjectChange("Hindi (or other regional language)")
//               }
//             />
//           }
//           label="Hindi (or other regional language)"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={selectedSubjects.includes("Mathematics")}
//               onChange={() => handleSubjectChange("Mathematics")}
//             />
//           }
//           label="Mathematics"
//         />
//       </Grid>
//     </Grid>
//   );
// }

// export default Subjects;
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useAuth } from "../components/auth/AuthContext";

function Subjects() {
  const { token } = useAuth();

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectChange = (subject) => {
    const updatedSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject];
    setSelectedSubjects(updatedSubjects);
  };

  const handleSubmit = async () => {
    // Call your API with selectedSubjects
    console.log("Selected Subjects:", selectedSubjects);
    const Subjects = {
      subject: selectedSubjects,
    };
    try {
      let url = `http://localhost:3000/teachers/update/subject`;

      // Replace the following with your actual API endpoint and parameters
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(Subjects),
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
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes("English")}
              onChange={() => handleSubjectChange("English")}
            />
          }
          label="English"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes(
                "Hindi (or other regional language)"
              )}
              onChange={() =>
                handleSubjectChange("Hindi (or other regional language)")
              }
            />
          }
          label="Hindi (or other regional language)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSubjects.includes("Mathematics")}
              onChange={() => handleSubjectChange("Mathematics")}
            />
          }
          label="Mathematics"
        />
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

export default Subjects;
