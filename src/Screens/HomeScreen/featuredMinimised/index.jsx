import React from "react";
import MinimisedItem from "./MinimisedItem";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
}));
const FeaturedMinimised = () => {
  const classes = useStyles();
  const {events} = useSelector((state)=> state.liveEvents)
  return (
    <div className={classes.root}>
      {
        events && events.map((event, i)=>{
          return(
            <div key={i}>
                  <MinimisedItem event={event}/>
              </div>
          )
        })
      }
    
      
    </div>
  );
};

export default FeaturedMinimised;
