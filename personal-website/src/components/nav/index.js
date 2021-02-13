import React from 'react';
import './nav.css';
import twitterIcon from '../../assets/twitter.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import {Navbar, Nav} from 'react-bootstrap';


class NavHeader extends React.Component {

  render() {
    return(
      <Navbar className="colorNav" expand="lg">
        <Navbar.Brand href="/"><h3>Hawthorne Hacks</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="linksContainer">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="https://twitter.com/hawtcode"><img alt="twitter icon" src={twitterIcon}></img></Nav.Link>
            <Nav.Link href="https://github.com/QO-Development"><img alt="github icon" src={githubIcon}></img></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/joshuahawthorne/"><img alt="linkedIn icon" src={linkedinIcon}></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavHeader;  
