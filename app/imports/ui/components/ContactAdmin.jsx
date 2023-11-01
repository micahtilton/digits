import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
const ContactAdmin = ({ contact }) => (
  <Card>
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>{contact.firstname} {contact.lastname}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
      <Card.Body>
        <Card.Text>{contact.description}</Card.Text>
        <footer className="blockquote-footer">{contact.owner}</footer>
      </Card.Body>
    </Card.Header>
  </Card>
);

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  contact: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    condition: PropTypes.string,
    image: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ContactAdmin;
