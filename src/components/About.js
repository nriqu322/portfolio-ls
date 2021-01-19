import React from 'react';
import {
  Container, Row, Card, Button,
} from 'react-bootstrap';
import frameworksIcon from '../assets/icons/frameworks-icon.png';
import languagesIcon from '../assets/icons/languages-icon.png';
import skillsIcon from '../assets/icons/skills-icon.png';
import resume from '../assets/resume.pdf';

const About = () => (
  <div className="mb-5">
    <div>
      <h1>About me</h1>
      <p className="intro-info">
        I can help you build a product, feature or website. Look through some of my projects,
        if you like what you see feel free to contact me. I&apos;m a reliable person and
        a team worker.
      </p>
      <Button className="details-btn mt-2" href={resume} download="Luis Saavedra Resume" variant="success">Get My Resume</Button>
    </div>
    <Container className="portfolio-cards mt-4">
      <Row className="card-container-row">
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={languagesIcon} style={{ width: '320px' }} />
          <Card.Body>
            <Card.Title className="card-title">Languages</Card.Title>
            <div className="d-flex flex-wrap card-stack-container">
              <Card.Text className="card-about">
                Javascript
              </Card.Text>
              <Card.Text className="card-about">
                Ruby
              </Card.Text>
              <Card.Text className="card-about">
                HTML5
              </Card.Text>
              <Card.Text className="card-about">
                CSS3
              </Card.Text>
              <Card.Text className="card-about">
                SQL
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={frameworksIcon} style={{ width: '320px' }} />
          <Card.Body>
            <Card.Title className="card-title">Frameworks</Card.Title>
            <div className="d-flex flex-wrap card-stack-container">
              <Card.Text className="card-about">
                React
              </Card.Text>
              <Card.Text className="card-about">
                Redux
              </Card.Text>
              <Card.Text className="card-about">
                Bootstrap
              </Card.Text>
              <Card.Text className="card-about">
                Ruby on Rails
              </Card.Text>
              <Card.Text className="card-about">
                Rspec
              </Card.Text>
              <Card.Text className="card-about">
                Capybara
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card className="card-container get-gray" style={{ width: '320px', height: '290px' }}>
          <Card.Img variant="top" src={skillsIcon} style={{ width: '320px' }} />
          <Card.Body>
            <Card.Title className="card-title">Skills</Card.Title>
            <div className="d-flex flex-wrap card-stack-container">
              <Card.Text className="card-about">
                Git
              </Card.Text>
              <Card.Text className="card-about">
                TDD
              </Card.Text>
              <Card.Text className="card-about">
                Teamwork
              </Card.Text>
              <Card.Text className="card-about">
                Heroku
              </Card.Text>
              <Card.Text className="card-about">
                Netlify
              </Card.Text>
              <Card.Text className="card-about">
                Remote Pair Programming
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default About;
