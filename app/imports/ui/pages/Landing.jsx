import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FileEarmarkTextFill, PeopleFill, Calendar2CheckFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Container>
      <Row className="align-middle text-center">

        <Col className="d-flex flex-column align-items-center">
          <PeopleFill size={100} />
          <h1>Multiple Users</h1>
          <p>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</p>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <FileEarmarkTextFill size={100} />
          <h1>Contact Details</h1>
          <p>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</p>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <Calendar2CheckFill size={100} />
          <h1>Timestamped Notes</h1>
          <p>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</p>
        </Col>
      </Row>

    </Container>

  </Container>
);

export default Landing;
