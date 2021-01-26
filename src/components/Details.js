import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Card } from 'react-bootstrap';
import { setModal } from '../actions/index';
import liveDemo from '../assets/icons/live-demo.svg';
import github from '../assets/icons/github.svg';

const ShowModal = () => {
  const modal = useSelector(state => state.modal.modal);
  const currentCard = useSelector(state => state.currentCard.currentCard);
  const dispatch = useDispatch();
  // const {
  //   title, description, liveDemoLink, githubLink, stackList, id, img,
  // } = props;

  const handleCancel = () => {
    dispatch(setModal(false));
  };

  return (
    <Modal
      show={modal}
      onHide={handleCancel}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {currentCard === undefined || currentCard === 'undefined' ? <div /> : (
        <div>
          <Modal.Header closeButton>
            {/* <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title> */}
          </Modal.Header>
          <div className="details-img-container">
            <img className="details-img" src={currentCard.src} alt="main" />
          </div>
          <div className="details-container">
            <Modal.Body>
              <h4 className="details-title my-3">{currentCard.title}</h4>
              <div className="d-flex flex-wrap detail-stack-container">
                {
                  currentCard.stackDetails && currentCard.stackDetails.map(stack => <Card.Text className="card-stack mr-2" key={stack[1]}>{stack[0]}</Card.Text>)
                }
              </div>
              <p className="modal-description mt-2">{currentCard.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button href={currentCard.liveDemoLink} target="_blank" variant="success">
                <span>See Live</span>
                <img src={liveDemo} alt="live-demo" />
              </Button>
              <Button href={currentCard.githubLink} target="_blank" variant="success">
                <span>See Source</span>
                <img src={github} alt="github-icon" />
              </Button>
            </Modal.Footer>
          </div>
        </div>
      )}
    </Modal>
  );
};

// ShowModal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   onHide: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   liveDemoLink: PropTypes.string,
//   githubLink: PropTypes.string.isRequired,
//   stackList: PropTypes.arrayOf(String).isRequired,
//   id: PropTypes.number.isRequired,
//   img: PropTypes.objectOf(String).isRequired,
// };

// ShowModal.defaultProps = {
//   liveDemoLink: '',
// };

export default ShowModal;
