import React from 'react';
import {
  Container, Row, Card, Button,
} from 'react-bootstrap';
import frameworksIcon from '../assets/icons/frameworks-icon.png';
import languagesIcon from '../assets/icons/languages-icon.png';
import skillsIcon from '../assets/icons/skills-icon.png';

const About = () => (
  <div className="my-5">
    <div>
      <h1>About me</h1>
      <p className="intro-info">
        I can help you build a product, feature or website. Look through some of my projects,
        if you like what you see feel free to contact me. I&apos;m a reliable person and
        a team worker.
      </p>
      <Button className="mt-2" href="#" variant="success">Get My Resume</Button>
    </div>
    <Container className="portfolio-cards mt-4">
      <Row className="card-container-row">
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={languagesIcon} style={{ width: '320px' }} />
          <Card.Body>
            <Card.Title className="card-title">Card Title</Card.Title>
            <div className="d-flex flex-wrap card-stack-container">
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
          </Card.Body>
        </Card>
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={frameworksIcon} style={{ width: '320px' }} />
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
          </Card.Body>
        </Card>
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={skillsIcon} style={{ width: '320px' }} />
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
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default About;
