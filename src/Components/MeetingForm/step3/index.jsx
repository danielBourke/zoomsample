import React, { useState } from "react";
import { Tooltip, Typography, Button } from "@material-ui/core";
import Avatar from "../../Avatar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
const Step3 = ({ handleSetThree }) => {
  const [participants, setParticipants] = useState([]);
  const [moderator, setModerator] = useState([]);
  const [contacts, setContacts] = useState([
    {
      id: "a",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: "b",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: "ab",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: "bnf",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: "asdf",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: "bdsfds",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: "asdfdsf",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: "bsdfdsfh",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: "adfds435",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
      id: "b43534",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
      id: "a345",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      id: "b345dfy",
      name: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ]);

  const handleAddParticipant = (person) => {
    console.log(person);
    setParticipants((oldparticipant) => [...oldparticipant, person]);
    setContacts(contacts.filter((e) => e.id !== person.id));
  };
  const handleAddModerator = (person) => {
    console.log(person);
    setModerator((oldparticipant) => [...oldparticipant, person]);
    setParticipants(participants.filter((e) => e.id !== person.id));
  };

  const handleRemoveParticipant = (person) => {
    console.log(person);
    setContacts((oldparticipant) => [...oldparticipant, person]);
    setParticipants(participants.filter((e) => e.id !== person.id));
  };

  const handleRemoveModerator = (person) => {
    console.log(person);
    setContacts((oldparticipant) => [...oldparticipant, person]);
    setModerator(moderator.filter((e) => e.id !== person.id));
  };

  console.log(`Add participants: ${moderator.length}`);
  return (
    <form
      style={{
        minWidth: "90vw",
        maxWidth: "90vw",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Moderator{moderator.length > 1 && "s"}
      </Typography>
      <div
        style={{
          display: "flex",
          border: "1px solid #ededed",
          minHeight: "274px",
          padding: "20px",
          flexDirection: "row",
          minWidth: "60vw",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        <div style={{ display: "flex" }}>
          {moderator &&
            moderator.map((participant, i) => (
              <div
                style={{
                  border: "1px solid #ededed",
                  padding: "10px",
                  borderRadius: 5,
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                key={i}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Avatar src={participant.photoURL} />
                  <h2 style={{ fontWeight: 200, margin: "auto" }}>
                    {participant.name}
                  </h2>
                  <Tooltip
                    title="remove"
                    aria-label="add"
                    onClick={() => handleRemoveModerator(participant)}
                  >
                    <Fab style={{ backgroundColor: "white" }}>
                      <CloseIcon style={{ fontSize: 40 }} color="secondary" />
                    </Fab>
                  </Tooltip>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        Participant{participants.length > 1 && "s"}
      </Typography>
      <div
        style={{
          display: "flex",
          border: "1px solid #ededed",
          minHeight: "274px",
          padding: "20px",
          flexDirection: "row",
          minWidth: "60vw",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        <div style={{ display: "flex" }}>
          {participants &&
            participants.map((participant, i) => (
              <div
                style={{
                  border: "1px solid #ededed",
                  padding: "10px",
                  borderRadius: 5,
                  minWidth: 150,
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                key={i}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Avatar src={participant.photoURL} />
                  <h2 style={{ fontWeight: 200, margin: "auto" }}>
                    {participant.name}
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Tooltip
                      title="remove"
                      aria-label="add"
                      onClick={() => handleRemoveParticipant(participant)}
                    >
                      <Fab style={{ backgroundColor: "white" }}>
                        <CloseIcon style={{ fontSize: 40 }} color="secondary" />
                      </Fab>
                    </Tooltip>

                    <Tooltip
                      title="Add as Moderator"
                      aria-label="add"
                      onClick={() => handleAddModerator(participant)}
                    >
                      <Fab style={{ backgroundColor: "white" }}>
                        <AddIcon style={{ fontSize: 40, color: green[500] }} />
                      </Fab>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <div
        style={{
          display: "flex",
          border: "1px solid #ededed",
          padding: "20px",
          flexDirection: "row",
          minWidth: "60vw",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        {contacts.map((contact, i) => (
          <div
            style={{
              border: "1px solid #ededed",
              padding: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              borderRadius: 5,
              maxWidth: 150,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            key={i}
            onClick={() => handleAddParticipant(contact)}
          >
            <Avatar src={contact.photoURL} />
            <h2 style={{ fontWeight: 200, margin: "auto" }}>{contact.name}</h2>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        {" "}
        <Button
          variant="outlined"
          style={{ marginTop: 50 }}
          onClick={() => handleSetThree()}
        >
          <Typography style={{ margin: 10 }}>next</Typography>
        </Button>
      </div>
    </form>
  );
};

export default Step3;
