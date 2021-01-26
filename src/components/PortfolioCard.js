import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { setCurrentCard, setModal } from '../actions/index';

const PortfolioCard = props => {
  const {
    title, sourceImg, stackList, card,
  } = props;
  const currentCard = useSelector(state => state.currentCard.currentCard);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (card !== currentCard) {
      dispatch(setCurrentCard(card));
      dispatch(setModal(true));
    } else {
      dispatch(setModal(true));
    }
  };

  return (
    <Card className="card-container" style={{ width: '320px', height: '411px' }}>
      <div className="card-img-container">
        <Card.Img variant="top" src={sourceImg} style={{ height: '236px' }} />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <div className="d-flex card-stack-container">
          {stackList && stackList.map(stack => (
            <Card.Text key={stack} className="card-stack">
              {stack}
            </Card.Text>
          ))}
        </div>
        <Button
          className="details-btn mt-2"
          onClick={handleClick}
          variant="success"
        >
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  sourceImg: PropTypes.string.isRequired,
  stackList: PropTypes.instanceOf(Array).isRequired,
  card: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PortfolioCard;
