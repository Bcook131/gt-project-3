import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Api from "../../utils/api";
import { useHistory } from "react-router-dom";

import Drawer from "../../components/Drawer";
import Footer from "../../components/Footer";
import SubmitButton from "../../components/SubmitButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
  },
  button: {
    fontSize: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  test: {
    margin: "20px"
  },
}));



const NewPlan = () => {
  const history = useHistory();
  const classes = useStyles();
  const [planName, setPlanName] = React.useState("");
  const [abv] = React.useState("");
  // const [bac, setBac] = React.useState('');
  // const [ounces, setOunces] = React.useState('');
  // const [weight, setWeight] = React.useState('');
  // const [hours, setHours] = React.useState('');

  const createPlan = (ev) => {
    ev.preventDefault();
    Api.post('/plans', { name: planName })
      .then(plan => history.push('/editPlan/' + plan.data._id))
  }

  return (
    <>
      <div className={`${classes.root} ${classes.test}`}>
        <Drawer></Drawer>
      </div>
      <div className={`${classes.root} ${classes.test}`}>
        <Grid container spacing={3}>
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={createPlan}
            >
              <div className={`${classes.root} ${classes.test}`}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              required
              label="Plan Name"
              variant="outlined"
              onChange={(ev) => setPlanName(ev.target.value)}
            />
          </Grid>
          </div>
          <div className={`${classes.root} ${classes.test}`}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            item
            xs={1}
          ></Grid>
          </div>
          </form>
        </Grid>
<div className={`${classes.root} ${classes.test}`}>
      <SubmitButton></SubmitButton>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};


export default NewPlan;
