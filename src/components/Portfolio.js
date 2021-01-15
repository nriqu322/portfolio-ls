import React from 'react';
import {
  Container, Row, Card, Button,
} from 'react-bootstrap';
import defaultImage from '../assets/images/default-image.jpg';

const Portfolio = () => (
  <div>
    <h1>My Recent Work</h1>
    <Container className="portfolio-cards">
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
          </Card.Body>
        </Card>
        {/* </Row> */}
        {/* <Row> */}
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
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
            <Button className="mt-2" href="#" variant="success">See Details</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default Portfolio;
