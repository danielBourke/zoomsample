import { combineReducers } from 'redux';
import featuredReducer from './featuredEvent';
import modalReducer from './modalreducer';

const rootReducer = combineReducers({
featuredStory: featuredReducer,
modal: modalReducer
});

export default rootReducer;