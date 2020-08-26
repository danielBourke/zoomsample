import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { TextField, makeStyles, Typography, Button } from "@material-ui/core";

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


const names = [
  "Art",
  "politics",
  "education",
  "science",
  "travel",
  "Music",
  "food",
];

const Step4 = ({handleSetFour}) => {
  const classes = useStyles();

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };


  return (
    <div style={{minWidth: "90vw", maxWidth: "90vw", justifyContent: "center", marginLeft: "auto", marginRight: "auto"}}>
      <form className={classes.root}>
      <Typography variant="h4" gutterBottom>
      event description
      </Typography>
  
      <TextField
        id="standard-multiline-static"
        label="event description"
        multiline
        rows={4}
        variant="outlined"
      />
  
   
      <FormControl style={{marginTop: "75px"}} variant="outlined">
        <InputLabel id="demo-mutiple-chip-label">Choose a category</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
     
          value={personName}
          onChange={handleChange}
          input={<Input  />}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Button variant="outlined" onClick={()=>handleSetFour()}>
           <Typography style={{margin: 10}}>
           next
             </Typography> 
          </Button>
        </div>
  
    </form>
    </div>
  );
};

export default Step4;
