import React from "react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import ProgressBar from "../ProgressBar";
const EventForm = () => {
  const [steps, setStep] = useState(5);
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
    switch (steps) {
      case 1:
        return (
          <>
            {" "}
            <Step1
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
        return <Step5 />;

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
