import React from 'react';
import {Col} from 'react-bootstrap';

class Resume extends React.Component {

  render() {
    return(
      <Col>
          <h2>Experience and Education</h2>

          <h4>ViaLoop</h4>
          <h5>2017-2021</h5>
          <h5>Software Engineer</h5>
          <h5>Anaheim, CA</h5>

          <br />

          <h4>Todayte</h4>
          <h5>2014-2017</h5>
          <h5>CTO and Founder</h5>
          <h5>Irvine, CA</h5>

          <br />

          <h4>Schlumberger</h4>
          <h5>2010-2014</h5>
          <h5>Senior Field Engineer</h5>
          <h5>Al Khobar, Saudi Arabia; Tyumen, Russia; and Ciudad del Carmen, Mexico</h5>

          <br />

          <h4>University of Minnesota</h4>
          <h5>2005-2010</h5>
          <h5>Bachelors of Science, Electrical Engineering</h5>
          <h5>Minneapolis, MN; and Gold Coast, QLD, Australia</h5>

          <br />

      </Col>
    );
  }
}

export default Resume; 