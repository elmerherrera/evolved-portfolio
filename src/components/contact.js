import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
    return (
        <Card className='bg-secondary text-white'>
        <Card.Body>
          <Card.Title>Contact Info</Card.Title>
          <Card.Text>Phone Number: 123-456-7890</Card.Text>
          <Card.Text>Email: dcshoeco109790@yahoo.com</Card.Text>
          <Button variant="outline-dark" href='https://github.com/elmerherrera'>Github Link</Button>
        </Card.Body>
      </Card>
    );
}