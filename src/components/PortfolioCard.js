import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { setCurrentCard, setModal } from '../actions/index';
// import ShowModal from './Details';
// import liveDemo from '../assets/icons/live-demo.svg';
// import github from '../assets/icons/github.svg';

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
        {/* <div className="d-flex justify-content-between">
          <Button
            className="portfolio-btn mt-1"
            href={liveDemoLink}
            target="_blank"
            variant="success"
          >
            <span>See Live</span>
            <img src={liveDemo} alt="live-demo" />
          </Button>
          <Button
            className="portfolio-btn mt-1"
            href={githubLink}
            target="_blank"
            variant="success"
          >
            <span>See Source</span>
            <img src={github} alt="github-icon" />
          </Button>
        </div> */}
        {/* <ShowModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={array[0].title}
          id={array[0].id}
          stackList={array[0].stack}
          description={array[0].description}
          img={englishWise}
          liveDemoLink={array[0].liveDemo}
          githubLink={array[0].githubLink}
        /> */}
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
  // liveDemo: PropTypes.string.isRequired,
  // github: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // liveDemoLink: PropTypes.string.isRequired,
  // githubLink: PropTypes.string.isRequired,
  sourceImg: PropTypes.string.isRequired,
  stackList: PropTypes.instanceOf(Array).isRequired,
  card: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PortfolioCard;
