import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './billboard.css';

class Billboard extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col style={{border: '2px red solid'}} md={12}>
            <div className="typewriter">
              <h4> func make(coffee string) Product &#123; </h4>
              <h4> if caffeinated &#123; </h4>
              <h4> product := hack() </h4>
              <h4> return product </h4>
              <h4> &#125; </h4>
              <h4> else &#123; </h4>
              <h4> consume(coffee)</h4>
              <h4> product := make(coffee)</h4>
              <h4> return product</h4>
              <h4> &#125; </h4>
            </div>
          </Col>
          <Col style={{border: '2px red solid'}} md={4}> <h4>Professional photo goes here</h4></Col>
          <Col style={{border: '2px red solid'}} md={8}>
            <p>Hello! My name is Josh Hawthorne and I'm a Full Stack Software Engineer based in the Los Angeles/Orange County area of Southern California.</p>
            <p>My current tech stack includes React, React Native, Golang, PostgreSQL, Google Cloud Platform, and iOS development in Swift. I am passionate about creating great products that add value to people's lives with the latest and greatest technology. I am a nerd, and I like to build cool stuff. </p>
            <p>When I'm not building things you can probably find me on a board of some kind (surf, SUP, or snow), golfing, strength training, reading, or playing my guitar.</p>
            <p>I graduated from the University of Minnesota in 2010 with a BS in Electrical Engineering, and a minor in Business Management. I spent a semester studying abroad in Australia on the Gold Coast, and ever since inernational travel has been a great love of mine.</p>
            <p>After school, I spent some time working in the oilfield as a field engineer. In addition to Australia, I've also lived in Saudi Arabia, Russia, and Mexico. My Spanish is aceptable, pero no puedo hablar como nativo. I couldn't tell you more than 10 words in Arabic if my life depended on it. And the only thing I know how to do in Russian is curse (thanks Russian roughnecks).</p>
            <p>Even though I was thousands of miles away, I knew something amazing was happening in Silicon Valley and I wanted to be a part of it. I made the switch in 2014 by starting my own company and haven't looked back since.</p>
            <p>Feel free to poke around, drop me a line, or check out examples of my past work below. Thanks for stopping by!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Billboard;