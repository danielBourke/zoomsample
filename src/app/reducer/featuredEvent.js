import { EDIT_EVENT } from "../constants";

const initialState = {
  url:
  "https://users-medico-dev.s3.eu-west-2.amazonaws.com/_114017424_covid_stock_gettyimages-1215463251.jpg",
title: "Coronavirus: UK to ramp up coronavirus monitoring programme",
desc:
  "Coronavirus tests are to be carried out on more people in the government's monitoring programme to get a better idea of the spread of the virus.",
category: "health",
id: 95947954245,
passcode: "0wGTGD"
};

const featuredReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EVENT: 
      return {
        ...state,
        title: action.title,
        id: action.id,
        passcode: action.passcode
        // Ensure we clear current session
        
      }
      
      
    



    default: {
      return state;
    }
  }
};

export default featuredReducer;
