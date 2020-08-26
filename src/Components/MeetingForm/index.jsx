import React from "react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import ProgressBar from "../ProgressBar";
import { useDispatch } from "react-redux";
import { ADD_EVENT } from "../../app/constants";
const EventForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle]= useState("")
  const [subHeading, setSubHeading]= useState("")
  const [steps, setStep] = useState(1);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDateEnd, handleDateChangeEnd] = useState(new Date());
  const [MeetingID, setMeetingID] = useState("");
  const [Passcode, setPasscode] = useState("");
  const handleChangeMeetingID = (e) => {
    setMeetingID(e.target.value);
  };
  const handleChangePasscode = (e) => {
    setPasscode(e.target.value);
  };
  const onTitleChange = (event) =>{
    setTitle(event.target.value)
  }
  const onSubtitleChange = (event) =>{
    setSubHeading(event.target.value)
  }
  const content = () => {
    const handleSetStepOne = () => {
      setStep(2);
    };

    const handleSetTwo = () => {
      setStep(3);
    };
    const handleSetThree = () => {
      setStep(4);
    };
    const handleSetFour = () => {
      setStep(5);
    };

    const createLiveEvent = () => {
      const event = {
          id: MeetingID.replace(/\s/g, ''),
          passcode: Passcode,
          heading: title,
          subHeading: subHeading

      }
      setStep(6)
      dispatch({type: ADD_EVENT, payload: event})

    }
    switch (steps) {
      case 1:
        return (
          <>
            {" "}
            <Step1
            subHeading={subHeading}
            onSubtitleChange={onSubtitleChange}
            title={title}
            onTitleChange={onTitleChange}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              handleSetStepOne={handleSetStepOne}
              selectedDateEnd={selectedDateEnd}
              handleDateChangeEnd={handleDateChangeEnd}
            />
          </>
        );
      case 2:
        return (
          <Step2
            Passcode={Passcode}
            MeetingID={MeetingID}
            handleChangeMeetingID={handleChangeMeetingID}
            handleChangePasscode={handleChangePasscode}
            handleSetTwo={handleSetTwo}
          />
        );

      case 3:
        return <Step3 handleSetThree={handleSetThree} />;

      case 4:
        return <Step4 handleSetFour={handleSetFour} />;
      case 5:
        return <Step5 createLiveEvent={createLiveEvent} />;

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
        justifyContent: "center",
      }}
    >
      <ProgressBar color="" width={(steps * 100) / 6} />
      {content()}
    </div>
  );
};

export default EventForm;
