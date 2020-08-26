import React, { useRef } from "react";
import DashboardLayout from "../../Layout/Dashboard";
import Page from "../../Components/Page";
import EventForm from "../../Components/MeetingForm";


const CreateEventForm = () => {

  const pageRef = useRef(null);

  return (
    <DashboardLayout>
      <Page  title="createliveform" ref={pageRef}>
        <EventForm />
      </Page>
    </DashboardLayout>
  );
};

export default CreateEventForm;
