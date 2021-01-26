import { combineReducers } from 'redux';
import modalReducer from './setModal';
import cardReducer from './currentCard';

const rootReducer = combineReducers({
  modal: modalReducer,
  currentCard: cardReducer,
});

export default rootReducer;
