import { SET_CURRENT_CARD } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.currentCard,
      };
    default:
      return state;
  }
};

export default cardReducer;
