import { MODAL_OPEN } from "../constants";

const initialState = {
  open: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN: 
      return {
        ...state,
        open: !state.open
        // Ensure we clear current session
        
      }
      
      
    



    default: {
      return state;
    }
  }
};

export default modalReducer;