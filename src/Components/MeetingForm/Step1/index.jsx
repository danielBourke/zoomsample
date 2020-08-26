import React from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";

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

const Step1 = ({
  handleSetStepOne,
  onTitleChange,
  title,
  startDate,
  onchangeStartDate,
  endDate,
  handleDateChangeEnd,
  onchangeEndDate,
  handleDateChange,
  selectedDate,
  selectedDateEnd
}) => {
  const classes = useStyles();
  return (
    <div>
    <form className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Name your event
      </Typography>
      <TextField
        id="outlined-helperText"
        label="name your event"
        value={title}
        onChange={onTitleChange}
        variant="outlined"
        fullWidth
      />
      <Typography variant="h4" gutterBottom style={{ marginTop: 40}}>
        When is it?
      </Typography>
      <Typography variant="h6" gutterBottom style={{marginBottom: 20, marginTop: 20}}>
        start date
      </Typography>

      <DateTimePicker
      label="DateTimePicker"
      inputVariant="outlined"
      selected={selectedDate}
      onChange={handleDateChange}
    />

      <Typography variant="h6" gutterBottom style={{marginBottom: 20, marginTop: 20}}>
        end date
      </Typography>

  
         <DateTimePicker
      label="DateTimePicker"
      inputVariant="outlined"
      selected={selectedDateEnd}
      onChange={handleDateChangeEnd}
    />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <Button variant="outlined" disabled={title===""} onClick={() => handleSetStepOne()}>
         <Typography style={{margin: 10}}>
         next
           </Typography> 
        </Button>
      </div>
    </form>
  </div>
  );
};

export default Step1;
