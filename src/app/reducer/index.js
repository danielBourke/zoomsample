import { combineReducers } from 'redux';
import featuredReducer from './featuredEvent';
import modalReducer from './modalreducer';
import liveEventsReducer from './liveEvents';

const rootReducer = combineReducers({
featuredStory: featuredReducer,
modal: modalReducer,
liveEvents: liveEventsReducer
});

export default rootReducer;