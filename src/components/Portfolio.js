import React, { useState } from 'react';
import {
  Container, Row, Card, Button,
} from 'react-bootstrap';
import ShowModal from './details';
import defaultImage from '../assets/images/default-image.jpg';

const Portfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const array = [
    {
      id: 101,
      stack: ['Javascript', 'Phaser3', 'Jest', 'Heroku', 'API'],
    },
    {
      id: 102,
      stack: ['React JS', 'Ruby on Rails', 'Netlify'],
    },
  ];

  console.log(array[0].stack);

  return (
    <div>
      <h1 className="section-title">My Recent Work</h1>
      <Container className="portfolio-cards mb-5">
        <Row className="card-container-row">
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" onClick={() => setModalShow(true)} variant="success">See Details</Button>
              <ShowModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Ninja Survival"
                id={array[0].id}
                stack={array[0].stack}
                description="A platform game developed with JavaScript and Phaser 3.
                In a future controlled by an Evil AI, a ninja has to survive by jumping
                from platform to platform, collecting ninja-stars,
                and kunais to increase the score, and give hope to mankind.
                Build the whole project, from story to deployment."
                liveDemo="#"
                githubLink="#"
              />
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" variant="success">See Details</Button>
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" variant="success">See Details</Button>
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" variant="success">See Details</Button>
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" variant="success">See Details</Button>
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={defaultImage} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  React
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <Button className="details-btn mt-2" href="#" variant="success">See Details</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
