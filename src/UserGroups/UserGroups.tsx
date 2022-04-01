import React from 'react';
import './UserGroups.css';
import { Card, Row, Col, Form, Container, Button } from 'react-bootstrap';
function UserGroups() {
  const Logo ='A L P H Ɑ';
  return (
    <Container fluid>
      <Form className="Padding">
        <Form.Group as={Row} controlId="inlineFormSearch">
          <Form.Label column sm={1} className='m-0' htmlFor="inlineFormSearch" >
            Search
          </Form.Label>
          <Col sm={2}>
            <Form.Control id="inlineFormSearch" type="search" placeholder="Search for a user group" />
          </Col>
          <Form.Label className='m-0'  column sm={1} htmlFor="inlineFormSelectSortBy" >
              Sort by
          </Form.Label>
          <Col sm={2}>
            <Form.Select id="inlineFormSelectSortBy" aria-label="Default select example">
              <option>Sort By</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button type="submit"  variant="light">Create a user group</Button>
          </Col>
        </Form.Group>
      </Form>
      <Row xs={1} md={3} xl={4} xxl={6} className="g-4">
        {Array.from({ length: 20 }).map((_, idx) => (
          <Col>
            <Card border="shadow" style={{ width: '18rem' }}>
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
    </Container>
  );
}

export default UserGroups;
