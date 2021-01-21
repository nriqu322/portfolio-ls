import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Card } from 'react-bootstrap';
import liveDemo from '../assets/icons/live-demo.svg';
import github from '../assets/icons/github.svg';
import defaultImg from '../assets/images/default-image.jpg';

const ShowModal = props => {
  const {
    show, onHide, title, description, liveDemoLink, githubLink, stackList, id,
  } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <img className="details-img" src={defaultImg} alt="main" />
      <div className="details-container">
        <Modal.Body>
          <h4 className="details-title my-3">{title}</h4>
          <div className="d-flex flex-wrap detail-stack-container">
            {
              stackList && stackList.map(stack => <Card.Text className="card-stack mr-2" key={id}>{stack}</Card.Text>)
            }
            {/* <Card.Text className="card-stack mr-2">
              {stack[0]}
            </Card.Text>
            <Card.Text className="card-stack mr-2">
              {stack[1]}
            </Card.Text>
            <Card.Text className="card-stack mr-2">
              {stack[2]}
            </Card.Text>
            <Card.Text className="card-stack">
              {stack[3]}
            </Card.Text>
            <Card.Text className="card-stack">
              {stack[4]}
            </Card.Text> */}
          </div>
          <p className="mt-2">{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button href={liveDemoLink} variant="success">
            <span>See Live</span>
            <img src={liveDemo} alt="live-demo" />
          </Button>
          <Button href={githubLink} variant="success">
            <span>See Source</span>
            <img src={github} alt="github-icon" />
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

ShowModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  stackList: PropTypes.arrayOf(String).isRequired,
  id: PropTypes.number.isRequired,
};

ShowModal.defaultProps = {
  liveDemoLink: '',
};

export default ShowModal;
