import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Billboard extends React.Component {
  render() {
    return(
      <Container style={{backgroundColor: 'red'}}>
        <Row>
          <Col> <h4>Billboard goes here col 1 of 1</h4></Col>
          <Col> <h4>Billboard goes here col 2 of 1</h4></Col>
          <Col> <h4>Billboard goes here col 3 of 1</h4></Col>
        </Row>
      </Container>
    );
  }
}

export default Billboard;