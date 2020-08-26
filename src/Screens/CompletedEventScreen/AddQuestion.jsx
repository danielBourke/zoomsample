import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  IconButton,
  Input,
  Paper,
  SvgIcon,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import { Send as SendIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({

  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      borderRadius: 10,
      position: "fixed", bottom: 0,
      maxWidth: "100vw",
      minWidth: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      borderRadius: 10,
      position: "fixed", bottom: 0,
      maxWidth: "100vw",
      minWidth: "100vw",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      borderRadius: 10,
      position: "fixed", bottom: 0,
      maxWidth: "45vw",
      minWidth: "45vw",
    },
  },
  divider: {
    width: 1,
    height: 24,
    position: "fixed", bottom: 0
  },
  fileInput: {
    display: 'none',
    position: "fixed", bottom: 0
  }
}));

function QuestionAdd({
  className,userId, ws, messages, disabled, setMessages, thread, ...rest
}) {
  const classes = useStyles();
  const [body, setBody] = useState("");


  const handleChange = (event) => {
    event.persist();
    setBody(event.target.value);
  };



  const handleSend = () => {


    const newMessage={
      body: body,
      timestamp: Date.now(),
      img: "https://randomuser.me/api/portraits/men/10.jpg"
    }
    ws.current.send(JSON.stringify({
      "MeetingId": "53454", 
      "action": "onMessage",
      "userId": userId,
      "data": body,
      "avatar": "https://randomuser.me/api/portraits/men/10.jpg" 
    }))
    setMessages((messages) => [ newMessage,...messages ])
    setBody("")
   
 
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleSend();
    }
  };


  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >

      
      <Avatar
        alt="Person"
        src="https://randomuser.me/api/portraits/men/10.jpg"
    
      />
      <Paper
        variant="outlined"
        component={Box}
        flexGrow={1}
        ml={2}
        p={1}
      >
     <Input
            className={classes.input}
            disableUnderline
            fullWidth
            value={body}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            placeholder="add a question"
          />
      </Paper>
      <Tooltip title="Send">
        <span>
          <IconButton
            color="secondary"
            disabled={!body || disabled}
            onClick={handleSend}
          >
            <SvgIcon fontSize="small">
              <SendIcon />
            </SvgIcon>
          </IconButton>
        </span>
      </Tooltip>
    
    </div>
  );
}



export default QuestionAdd;