import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./billboard.css";
import Typer from "../typer";
import Resume from "../resume";
import Projects from "../projects";
import Skills from "../skills";

class Billboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Typer />
        </Row>

        <Row>
          <Col md={4}>
            <h2>About</h2>
            <h4>Professional photo goes here</h4>
          </Col>
          <Col md={8}>
            <p>
              Hello! My name is Josh Hawthorne and I'm a Full Stack Software
              Engineer based in the Los Angeles/Orange County area of Southern
              California.
            </p>
            <p>
              My current tech stack includes React, React Native, Golang,
              PostgreSQL, Google Cloud Platform, and iOS development in Swift. I
              am passionate about creating great products that add value to
              people's lives with the latest and greatest technology. In other
              words, I like to build cool stuff.{" "}
            </p>
            <p>
              When I'm not building things you can probably find me on a board
              of some kind (surf, SUP, or snow), golfing, strength training,
              reading, or playing my guitar.
            </p>
            <p>
              I graduated from the University of Minnesota in 2010 with a BS in
              Electrical Engineering, and a minor in Business Management. I
              spent a semester studying abroad in Australia on the Gold Coast,
              and ever since inernational travel has been a great love of mine.
            </p>
            <p>
              After school, I spent some time working in the oilfield as a field
              engineer. In addition to Australia, I've also lived in Saudi
              Arabia, Russia, and Mexico. My Spanish is aceptable, pero no puedo
              hablar como nativo. I couldn't tell you more than 10 words in
              Arabic if my life depended on it. And the only thing I know how to
              do in Russian is curse (thanks Russian roughnecks).
            </p>
            <p>
              Even though I was thousands of miles away, I knew something
              amazing was happening in Silicon Valley and I wanted to be a part
              of it. I made the switch in 2014 by starting my own company and
              haven't looked back since.
            </p>
            <p>
              Feel free to poke around, drop me a line, or check out examples of
              my past work below. Thanks for stopping by!
            </p>
          </Col>
        </Row>

        <Row>
          <Resume />
        </Row>

        <Projects />

        <Row>
          <Col style={{ textAlign: "center", marginTop: 20 }}>
            <h4>
              Want to see more public examples of my work? Check out my Github
              below:
            </h4>
            <br />
            <Button
              variant="outline-info"
              onClick={() => {
                window.open("https://github.com/QO-Development", "_blank");
              }}
            >
              GitHub
            </Button>
          </Col>
        </Row>

        <Row>
          <Skills />
        </Row>

        <Row>
          <Col>
            <br />
            <h2>Get in Touch</h2>
            <p>
              Got something you'd like to talk about? Please feel free to
              contact me at{" "}
              <a
                className="email"
                href="mailto:josh@hawthornehacks.com?subject=Personal Website Inbound Request"
                alt="Email me"
              >
                josh@hawthornehacks.com
              </a>
            </p>

            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="footer">
              <div className="smContainer">
                <a href="/">Twitter</a> <a href="/">LinkedIn</a>{" "}
                <a href="/">GitHub</a>
              </div>
              <p>&copy; 2021 Hawthorne Hacks</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Billboard;
