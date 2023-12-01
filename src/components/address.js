import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAuth } from "../components/auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Address() {
  const { token } = useAuth();

  const classes = useStyles();

  // State variables for each input field
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect data from state variables
    const addressData = {
      // city,
      // district,
      // state,
      pinCode,
      landmark,
    };
    console.log(addressData, "addressData++++++++++++++++");
    // Call your POST API with the collected data
    // Example using fetch API
    fetch("http://localhost:3000/updateTeachersAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(addressData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <div className={classes.paper}> */}
      {/* <Typography component="h1" variant="h5">
          Fill Your Address
        </Typography> */}
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="pinCode"
              label="Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="landmark"
              label="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
      {/* </div> */}
    </Container>
  );
}

export default Address;
