import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    fontSize: 30,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-number"
            label="Weight"
            type="number"
            helperText="pounds"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="standard-number"
            label="Height"
            type="number"
            helperText="inches"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="standard-number"
            label="Time frame"
            type="number"
            helperText="hours"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button className={classes.button} variant="contained" color="primary">
        Submit
      </Button>
        </div>
      </form>
    </>
  );
};

export default Home;
