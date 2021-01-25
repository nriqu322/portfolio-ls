const SET_CURRENT_CARD = 'SET_CURRENT_CARD';
const SET_MODAL = 'SET_MODAL';

const setCurrentCard = currentCard => ({
  type: SET_CURRENT_CARD,
  currentCard,
});

const setModal = modal => ({
  type: SET_MODAL,
  modal,
});

export {
  SET_CURRENT_CARD, SET_MODAL, setCurrentCard, setModal,
};
