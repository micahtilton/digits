import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Container>
      <Row className="align-middle text-center">
        <Col className="d-flex flex-column align-items-center">
          <PeopleFill size={100} />
          <h2>Multiple Users</h2>
          <p>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</p>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <FileEarmarkTextFill size={100} />
          <h2>Contact Details</h2>
          <p>For each contact, you can save their name, address, and phone number.</p>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <Calendar2CheckFill size={100} />
          <h2>Timestamped Notes</h2>
          <p>Each time you make contact with a contact, you can write a note that summarizes the conversation. This note is saved along with a timestamp with the contact.</p>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Landing;
