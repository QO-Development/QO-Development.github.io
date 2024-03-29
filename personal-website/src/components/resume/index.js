import React from "react";
import { Col, Button } from "react-bootstrap";
import "./resume.css";
import { useSpring, animated } from "react-spring";

function Resume() {
  const [overlayProps, set] = useSpring(() => {
    return {
      marginTop: 2000,
    };
  });

  const openAnimation = () => {
    set({ marginTop: 0 });
  };

  const closeAnimation = () => {
    set({ marginTop: 2000 });
  };

  return (
    <Col>
      <div className="mainContainer">
        <h3>Would you like to see my work experience and education?</h3>
        <br />
        <Button variant="outline-info" onClick={openAnimation}>
          Experience &#38; Education
        </Button>
      </div>

      <animated.div className="overlay" style={overlayProps}>
        <div className="container">
          <div className="resumeHeader">
            <h2>Experience and Education</h2>
            <Button variant="info" onClick={closeAnimation}>
              Done
            </Button>
          </div>

          <br />

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
          <h5>
            Al Khobar, Saudi Arabia; Tyumen, Russia; and Ciudad del Carmen,
            Mexico
          </h5>

          <br />

          <h4>University of Minnesota</h4>
          <h5>2005-2010</h5>
          <h5>Bachelors of Science, Electrical Engineering</h5>
          <h5>Minneapolis, MN; and Gold Coast, QLD, Australia</h5>
        </div>
      </animated.div>
    </Col>
  );
}

export default Resume;
