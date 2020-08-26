import React from "react";
import {
  Avatar,
  makeStyles,
  Button,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      minWidth: "100vw",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "100vw",
      minWidth: "100vw",
      display: "flex",
      flexDirection: "row",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "100vw",
      minWidth: "100vw",
      display: "flex",
      flexDirection: "row",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
    },
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "50vw",
      minWidth: "50vw",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",

      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50vw",
      minWidth: "50vw",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      borderRadius: 5,
      margin: 10,
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 10,
      paddingBottom: 10,
    },
    [theme.breakpoints.up("lg")]: {},
  },
  successIcon: {
    color: "#32a9db",
  },
  disabledButton: {
    color: "#d6d6d6",
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          minWidth: "100vw",
          backgroundColor: "white",
          display: "flex",
          minHeight: 60,
          justifyContent: "space-between",
          marginTop: "auto",
          marginBottom: "auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)",
        }}
      >
        <div className={classes.root}>
          <div style={{ marginRight: "auto", display: "flex" }}>
            {" "}
            <Link
              to="/"
              style={{
                display: "flex",
                alignContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <img
                alt=""
                style={{
                  marginLeft: "10px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                src="/images/logo.png"
              />
            </Link>
          </div>

          <div className={classes.icons}>
            <Button className={classes.button} color="default">
              <HomeOutlinedIcon className={classes.disabledButton} />
            </Button>

            <Button className={classes.button} color="default">
              <PeopleAltOutlinedIcon className={classes.disabledButton} />
            </Button>
            <Button className={classes.button}>
              <OndemandVideoIcon className={classes.successIcon} />
            </Button>
            <Button className={classes.button} color="default">
              <ChatOutlinedIcon className={classes.disabledButton} />
            </Button>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/*         <Tooltip title="create event">
                <IconButton
                  component={RouterLink}
                  to="/eventform"
                  aria-label="create event"
                >
                  <IosAddCircleOutline fontSize="40px" color="white" />
                </IconButton>
              </Tooltip>
                */}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link
                to="/eventform"
                style={{
                  marginRight: 20,

                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "auto",
                }}
              >
                <Tooltip title="create event" aria-label="add">
                  <IconButton aria-label="delete">
                    <AddIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Link>
              <div
                style={{
                  marginRight: 20,
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "auto",
                }}
              >
                <Avatar
                  style={{
                    boxShadow:
                      "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                  }}
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
