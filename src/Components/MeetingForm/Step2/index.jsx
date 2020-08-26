import React from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
      padding: 10,
      minWidth: "90vw",
      minHeight: "90vh",

      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      display: "flex",
      alignContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "60vw",
      padding: 20,
      minHeight: "60vh",
      minWidth: "60vw",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10px",
      display: "flex",
      alignContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "60vw",
      padding: 40,
      minHeight: "60vh",

      minWidth: "60vw",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10px",
    },
  },
}));

const Step2 = ({
    handleSetTwo,

  title,
  MeetingID,
  handleChangeMeetingID,
  Passcode,
  handleChangePasscode
}) => {
  const classes = useStyles();
  return (
    <div>
    <form className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Zoom Meeting ID
      </Typography>
      <TextField
        id="outlined-helperText"
        label="Zoom Meeting ID"
        value={MeetingID}
        onChange={handleChangeMeetingID}
        variant="outlined"
        fullWidth
      />
     <Typography variant="h4" style={{marginTop: 50}} gutterBottom>
        Zoom Passcode
      </Typography>
      <TextField
        id="outlined-helperText"
        label="Zoom Passcode"
        value={Passcode}
        onChange={handleChangePasscode}
        variant="outlined"
        fullWidth
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <Button variant="outlined"  onClick={() => handleSetTwo()}>
         <Typography style={{margin: 10}}>
         next
           </Typography> 
        </Button>
      </div>
    </form>
  </div>
  );
};

export default Step2;
