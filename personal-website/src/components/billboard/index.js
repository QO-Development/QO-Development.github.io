import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './billboard.css';
import Typewriter from 'typewriter-effect';

class Billboard extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col style={{border: '2px red solid'}} md={12}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('<span class="func">func</span> <span class="funcName">make</span>(coffee <span class="param">string</span>) Product { <br />')
                  .pauseFor(1500)
                  .typeString('<span class="indent"> <span class="keyword">if</span> caffeinated { </span> <br />')
                  .typeString('<span class="doubleIndent">product := hack() </span> <br />')
                  .typeString('<span class="doubleIndent"> <span class="keyword">return</span> product </span> <br />')
                  .typeString('<span class="indent">} <span class="keyword"> else </span> { </span> <br />')
                  .typeString('<span class="doubleIndent"> consume(coffee) </span> <br />')
                  .typeString('<span class="doubleIndent"> product := make(coffee) </span> <br />')
                  .typeString('<span class="keyword doubleIndent">return</span> product <br />')
                  .typeString('<span class="indent">} </span> <br />')
                  .typeString('}')
                  .start();
              }}
            />
          </Col>
          <Col style={{border: '2px red solid'}} md={4}> 
            <h2>About</h2>
            <h4>Professional photo goes here</h4>
          </Col>
          <Col style={{border: '2px red solid'}} md={8}>
            <p>Hello! My name is Josh Hawthorne and I'm a Full Stack Software Engineer based in the Los Angeles/Orange County area of Southern California.</p>
            <p>My current tech stack includes React, React Native, Golang, PostgreSQL, Google Cloud Platform, and iOS development in Swift. I am passionate about creating great products that add value to people's lives with the latest and greatest technology. In other words, I like to build cool stuff. </p>
            <p>When I'm not building things you can probably find me on a board of some kind (surf, SUP, or snow), golfing, strength training, reading, or playing my guitar.</p>
            <p>I graduated from the University of Minnesota in 2010 with a BS in Electrical Engineering, and a minor in Business Management. I spent a semester studying abroad in Australia on the Gold Coast, and ever since inernational travel has been a great love of mine.</p>
            <p>After school, I spent some time working in the oilfield as a field engineer. In addition to Australia, I've also lived in Saudi Arabia, Russia, and Mexico. My Spanish is aceptable, pero no puedo hablar como nativo. I couldn't tell you more than 10 words in Arabic if my life depended on it. And the only thing I know how to do in Russian is curse (thanks Russian roughnecks).</p>
            <p>Even though I was thousands of miles away, I knew something amazing was happening in Silicon Valley and I wanted to be a part of it. I made the switch in 2014 by starting my own company and haven't looked back since.</p>
            <p>Feel free to poke around, drop me a line, or check out examples of my past work below. Thanks for stopping by!</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Experience and Education</h2>
            <p>Make a nicely formatted resume here, and make it hide by default</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Projects</h2>
            <h3>Vertlas</h3>
            <h3>Todayte</h3>
            <h3>Backup Genius</h3>
            <h3>And more...</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Want to see more public examples of my work? Check out my <a href="/">Github</a></h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Skills</h2>
            <p>List all your skills here with icons...</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Get in Touch</h2>
            <p>Got something you'd like to talk about? Please feel free to contact me at `email icon here` josh@hawthornehacks.com</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="/">Twitter</a> <a href="/">LinkedIn</a> <a href="/">GitHub</a>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>&copy; 2021 Hawthorne Hacks</p>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Billboard;
