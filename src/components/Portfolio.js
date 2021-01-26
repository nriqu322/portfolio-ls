import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';
import portfolioInfo from '../assets/portfolioInfo';
import ShowModal from './Details';

const Portfolio = () => (
  <div className="top-space" id="portfolio">
    <h1 className="section-title">My Recent Work</h1>
    <Container className="portfolio-cards mb-5">
      <Row className="card-container-row">
        {portfolioInfo && portfolioInfo.map(card => (
          <PortfolioCard
            key={card.id}
            title={card.title}
            sourceImg={card.src}
            liveDemoLink={card.liveDemo}
            githubLink={card.githubLink}
            stackList={card.stack}
            card={card}
          />
        ))}
      </Row>
    </Container>
    <ShowModal />
  </div>
);

export default Portfolio;
