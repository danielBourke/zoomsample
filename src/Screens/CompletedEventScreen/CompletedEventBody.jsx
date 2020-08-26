import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import QuestionAdd from "./AddQuestion";
import MessageList from "./MessageList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.dark,
    marginTop: 20,
  },
}));

function CompletedEventBody() {
  const classes = useStyles();

  const ws = useRef(null);
  const [moderatorMessages, setModeratorMessages] = useState([
    {
      body: "this is the first message",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ]);
  const [messages, setMessages] = useState([
    {
      body: "this is the first message",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      body: "this is the second message",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      body: "this is the third message",
      img: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      body: "this is the fourth message",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  ]);

  const [userId] = useState(uuidv4());

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://lx9g01op7b.execute-api.us-east-1.amazonaws.com/dev?userId=userId&AttendeeId=${userId}&MeetingId=53454`
    );
    console.log(ws.current)
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    return () => {
      ws.current.close();
    };
  }, [userId]);

  useEffect(() => {
    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);

      const newMessage = {
        body: data.data,
        img: data.avatar,
      };

      const promotedQuestion = {
        type: data.type,
        body: data.data,
        img: data.avatar,
      };

      if (data.type === "promoteQuestion") {
        setMessages((messages) => [promotedQuestion, ...messages]);
      } else {
        setMessages((messages) => [newMessage, ...messages]);
      }

      console.log("e", e);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          style={{
            minWidth: "90%",
            minHeight: 350,
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
          title="title"
          src="https://www.youtube.com/embed/9tDWP0HT4zY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>

      <MessageList
        setMessages={setMessages}
        ws={ws}
        userId={userId}
        moderatorMessages={moderatorMessages}
        messages={messages}
        setModeratorMessages={setModeratorMessages}
      />

      <QuestionAdd
        userId={userId}
        ws={ws}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default CompletedEventBody;