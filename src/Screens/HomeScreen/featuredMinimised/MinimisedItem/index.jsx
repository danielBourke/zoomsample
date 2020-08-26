import React from "react"
import IosRadioOutline from "react-ionicons/lib/IosRadioOutline";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {

      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 250,
        minWidth: 250,
        height: 150,
        marginTop: 20
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 250,
        height: 150,
        marginTop: 20,
        minWidth: 250,
      },
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        height: 300,
        width: "100vw",
      },
      [theme.breakpoints.up("md")]: {
        height: 150,
        maxWidth: 250,
      },
      [theme.breakpoints.up("lg")]: {
        height: 150,
        maxWidth: 250,
      },
    },
 
  }));

const MinimisedItem = ({event}) => {

    const classes = useStyles();
    return(
      <Link
      style={{ color: "inherit", textDecoration: "inherit", maxWidth: 250 }}
      to={`/meeting/${event.id}/${event.passcode}`}
     className={classes.root}>
       <div className={classes.root}>
             <div
          className={classes.image}
          style={{
            backgroundImage: `url(https://users-medico-dev.s3.eu-west-2.amazonaws.com/_114031431_11_reuters_hi062892380.jpg)`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
           
          }}
  
       
      
        />
        <div style={{display: "flex" , flexDirection: "row"}}>
        <IosRadioOutline color="red" beat={true} /> <h4 style={{color: "red", marginTop: "auto", marginBottom: "auto"}}>Live  </h4>
        </div>
        <h4>{event.heading}</h4>
            <h6>{event.subHeading}</h6>
            </div>
        </Link>
    )
}

export default MinimisedItem