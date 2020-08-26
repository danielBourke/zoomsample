import {  ADD_EVENT } from "../constants";

const initialState = {
  events:[
      {
          id: 123123,
          passcode: 123123,
          img: "https://users-medico-dev.s3.eu-west-2.amazonaws.com/_114031431_11_reuters_hi062892380.jpg",
          heading: "Berlin motorway crashes probed as terror attack",
          subHeading: "Belarusian President Alexander Lukashenko has stepped up efforts to reassert his control after 10 days."
      }
  ]
};

const liveEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload] 
      };

    default: {
      return state;
    }
  }
};

export default liveEventsReducer;
