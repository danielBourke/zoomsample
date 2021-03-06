import React, { useRef } from "react";
import FeaturedStory from "./featuredStory";
import { makeStyles } from "@material-ui/core";
import FeaturedMinimised from "./featuredMinimised";
import DashboardLayout from "../../Layout/Dashboard";
import Page from "../../Components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.background.dark,

      display: "flex",
      maxWidth: "100vw",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.background.dark,
      marginTop: 50,
      flexDirection: "column",
      display: "flex",
      maxWidth: "85vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.background.dark,

      flexDirection: "column",
      display: "flex",

      maxWidth: "45vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
const HomeMeeting = () => {
  const classes = useStyles();
  const pageRef = useRef(null);

  return (
    <DashboardLayout>
      <Page className={classes.root} title="events" ref={pageRef}>
        <FeaturedStory />
        <FeaturedMinimised />
      </Page>
    </DashboardLayout>
  );
};

export default HomeMeeting;
