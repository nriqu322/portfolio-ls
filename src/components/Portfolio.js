import React from 'react';
import {
  Container, Row, Card, Button,
} from 'react-bootstrap';
// import ShowModal from './details';
// import portfolioInfo from '../assets/portfolioInfo';
import englishWise from '../assets/images/english-wise.png';
import ninjaSurvival from '../assets/images/ninja-survival.png';
import superheroCatalog from '../assets/images/superhero-catalog.png';
import timeTracker from '../assets/images/time-tracker.png';
import weatherApp from '../assets/images/weather-app.png';
import directoryOfCourses from '../assets/images/directory-of-courses.png';
import liveDemo from '../assets/icons/live-demo.svg';
import github from '../assets/icons/github.svg';

const Portfolio = () => {
  // const [modalShow, setModalShow] = useState(false);
  const references = [
    {
      liveDemoLink: 'https://nriqu322-english-wise.netlify.app/',
      githubLink: 'https://github.com/nriqu322/english-wise',
    },
    {
      liveDemoLink: 'https://still-river-44514.herokuapp.com/',
      githubLink: 'https://github.com/nriqu322/ninja-game',
    },
    {
      liveDemoLink: 'https://nriqu322-superhero-catalogue.netlify.app/',
      githubLink: 'https://github.com/nriqu322/superhero-catalogue',
    },
    {
      liveDemoLink: 'https://fast-woodland-21539.herokuapp.com/',
      githubLink: 'https://github.com/nriqu322/time-tracker',
    },
    {
      liveDemoLink: 'https://rawcdn.githack.com/nriqu322/weather-app/1d281b039cdbed32a3a7a688ab4b740b4267a8e8/dist/index.html',
      githubLink: 'https://github.com/nriqu322/weather-app',
    },
    {
      liveDemoLink: 'https://raw.githack.com/nriqu322/directory-of-courses/master/main.html',
      githubLink: 'https://github.com/nriqu322/directory-of-courses',
    },
  ];
  return (
    <div>
      <h1 className="section-title">My Recent Work</h1>
      <Container className="portfolio-cards mb-5">
        <Row className="card-container-row">
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={englishWise} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Enlglish Wise</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  React JS
                </Card.Text>
                <Card.Text className="card-stack">
                  Redux
                </Card.Text>
                <Card.Text className="card-stack">
                  Ruby on Rails
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[0].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[0].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
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
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success">
                See Details
              </Button> */}
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={ninjaSurvival} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Ninja Survival</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  Phaser 3
                </Card.Text>
                <Card.Text className="card-stack">
                  Heroku
                </Card.Text>
                <Card.Text className="card-stack">
                  Webpack
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[1].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[1].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success"
              >
                See Details
              </Button> */}
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={superheroCatalog} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Superhero Catalog</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  React JS
                </Card.Text>
                <Card.Text className="card-stack">
                  Redux
                </Card.Text>
                <Card.Text className="card-stack">
                  Netlify
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[2].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[2].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success"
              >
                See Details
              </Button> */}
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={timeTracker} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Time-Tracker</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Ruby on Rails
                </Card.Text>
                <Card.Text className="card-stack">
                  RSpec
                </Card.Text>
                <Card.Text className="card-stack">
                  Heroku
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[3].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[3].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success"
              >
                See Details
              </Button> */}
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={weatherApp} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Weather App</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  Javascript
                </Card.Text>
                <Card.Text className="card-stack">
                  CSS
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  OpenWeatherAPI
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[4].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[4].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success"
              >
                See Details
              </Button> */}
            </Card.Body>
          </Card>
          <Card className="card-container" style={{ width: '320px', height: '411px' }}>
            <Card.Img variant="top" src={directoryOfCourses} style={{ height: '236px' }} />
            <Card.Body>
              <Card.Title className="card-title">Directory of Courses</Card.Title>
              <div className="d-flex card-stack-container">
                <Card.Text className="card-stack">
                  HTML5
                </Card.Text>
                <Card.Text className="card-stack">
                  CSS3
                </Card.Text>
                <Card.Text className="card-stack">
                  Bootstrap
                </Card.Text>
                <Card.Text className="card-stack">
                  Box Model
                </Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Button className="portfolio-btn mt-1" href={references[5].liveDemoLink} target="_blank" variant="success">
                  <span>See Live</span>
                  <img src={liveDemo} alt="live-demo" />
                </Button>
                <Button className="portfolio-btn mt-1" href={references[5].githubLink} target="_blank" variant="success">
                  <span>See Source</span>
                  <img src={github} alt="github-icon" />
                </Button>
              </div>
              {/* <Button
                className="details-btn mt-2"
                onClick={() => setModalShow(true)}
                variant="success"
              >
                See Details
              </Button> */}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
