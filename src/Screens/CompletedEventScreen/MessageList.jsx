import React from "react";
import {
  Avatar,
  Typography,
  Tooltip,
  IconButton,
  makeStyles,

} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
  
      minHeight: 250,
      padding: 20,
      borderRadius: 10,
      flexGrow: 1,
      minWidth: "95vw",
      overflow: "scroll",
    },

    [theme.breakpoints.up("md")]: {

      flexGrow: 1,
      padding: 20,

      borderRadius: 10,
      minWidth: "85%",
      overflow: "scroll",
      marginBottom: 60
    },
    [theme.breakpoints.up("lg")]: {
  
      borderRadius: 10,
      flexGrow: 1,
      overflow: "scroll",
      marginBottom: 60
    },
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "95vw",
    },

    [theme.breakpoints.up("md")]: {
      minWidth: "95vw",
      padding: 10,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "40vw",
      minWidth: "40vw",
      padding: 10,
    },
  },

  divider: {
    width: 1,
    height: 24,
  },
  fileInput: {
    display: "none",
  },
}));

const MessageList = ({ messages, ws, userId,setModeratorMessages, setMessages, moderatorMessages }) => {
  const classes = useStyles();
  const handleAdd = (newMessage) => {

    console.log(newMessage)
    const promotedQuestion = {
      type: "promoteQuestion",
      body: newMessage.body,
      img: newMessage.img,
      }
  
    setMessages((messages) => [
      promotedQuestion,
      ...messages,
      
    ]);

    ws.current.send(JSON.stringify({
      "MeetingId": "53454", 
      "action": "onModeratorAdd",
      "userId": userId,
      "data": newMessage.body,
      "avatar": "https://randomuser.me/api/portraits/men/10.jpg" 
    }))
  };

  return (
    <>
      <div className={classes.header}>
        <Typography style={{ marginBottom: 5 }}>Message list</Typography>
      </div>
{/*      <div className={classes.root}>
*/}

      <div
      className={classes.root}
   
          options={{ suppressScrollX: true }}
        >
        {messages.map((message, i) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "space-around",
                justifyContent: "space-between",
                marginBottom: 10,
                backgroundColor: message.type === "promoteQuestion" ? "#c7f2c2" : null,
                borderRadius: 10
              }}
              key={i}
            >
              <div style={{ display: "flex" }}>
                <Avatar src={message.img} style={{marginTop: "auto", marginBottom: "auto", marginLeft: 10}} />

                <Typography
                  style={{
                    marginLeft: 25,
                    marginTop: "auto",
                    marginBottom: "auto",
                    justifySelf: "flex-start",
                  }}
                >
                  {message.body}
                </Typography>
              </div>
              <Tooltip
                title="add"
                style={{ marginLeft: "auto", marginRight: 0 }}
              >
                <IconButton
                  onClick={() => handleAdd(message)}
                  aria-label="delete"
                  style={{ width: 50, height: 50 }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        })}
  </div>
    </>
  );
};
export default MessageList;