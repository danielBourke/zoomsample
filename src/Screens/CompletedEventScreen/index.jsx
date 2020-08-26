import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Page from "../../Components/Page";
import CompletedEventBody from "./CompletedEventBody";
import DashboardLayout from "../../Layout/Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.background.dark,
      height: "95vh",
      display: "flex",
      overflow: "hidden",
      position: "relative",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.background.dark,
      height: "95vh",
      display: "flex",
      overflow: "hidden",
      position: "relative",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.background.dark,
      height: "95vh",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      maxWidth: "45vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

function CompletedDiscussionScreen() {
  const classes = useStyles();
  const pageRef = useRef(null);
  useEffect(() => {}, []);

  return (
    <DashboardLayout>
      <Page className={classes.root} title="discussion" ref={pageRef}>
        <CompletedEventBody />
      </Page>
    </DashboardLayout>
  );
}

export default CompletedDiscussionScreen;
