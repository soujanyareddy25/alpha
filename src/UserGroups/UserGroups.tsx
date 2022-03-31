import React from 'react';
import logo from './logo.svg';
import './UserGroups.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function UserGroups() {
  const Logo ='A L P H Ɑ';
  return (
    <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
    {Array.from({ length: 20 }).map((_, idx) => (
      <Col>
        <Card border="light" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default UserGroups;
