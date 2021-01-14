import React from 'react';
import { Card, Button } from 'react-bootstrap';
import defaultImage from '../assets/images/default-image.jpg';

const Portfolio = () => (
  <div>
    <h1>My Recent Work</h1>
    <div className="portfolio-cards">
      <Card style={{ width: '369', height: '474px' }}>
        <Card.Img variant="top" src={defaultImage} style={{ height: '272px' }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Portfolio;
