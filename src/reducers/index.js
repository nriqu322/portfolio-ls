import { combineReducers } from 'redux';
import modalReducer from './setModal';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
