import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ChatIcon from "@material-ui/icons/Chat";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
      maxWidth: 1000,
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
      maxWidth: 1000,
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
      width: 650,
      boxShadow: "0 2px 10px 0 rgba(23,70,161,.11)",
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
      width: 650,
      boxShadow: "0 2px 10px 0 rgba(23,70,161,.11)",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: 10,
      maxWidth: 300,
      maxHeight: 300,
      display: "flex",
      flexDirection: "column",
    },
  },
  divider: {
    width: 1,
    height: 24,
  },
}));

const FeaturedStory = () => {
  const classes = useStyles();
  const featured = useSelector((state) => state.featuredStory);
  return (
    <Link
      style={{ color: "inherit", textDecoration: "inherit" }}
      to={`pastmeeting/${featured.id}`}
    >
      <div className={classes.root}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${featured.url})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.text}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">{featured.title}</Typography>
            <Typography variant="subtitle2">{featured.desc}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignSelf: "flex-end",
              marginTop: "auto",
            }}
          >
            <span style={{ display: "flex", flexDirection: "row" }}>
              <AccessTimeIcon />{" "}
              <h6
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                {" "}
                2h
              </h6>
            </span>

            <Divider className={classes.divider} />

            <span
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <h6>{featured.category}</h6>
            </span>

            <Divider className={classes.divider} />
            <span style={{ display: "flex", flexDirection: "row" }}>
              <ChatIcon />{" "}
              <h6
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                580{" "}
              </h6>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedStory;
