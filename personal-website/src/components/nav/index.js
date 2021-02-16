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
        <Navbar.Brand href="/"><h4>Hawthorne <br /> Hacks</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapser" id="basic-navbar-nav">
          <Nav className="linksContainer">
            <Nav.Link className="link" href="/">About</Nav.Link>
            <Nav.Link className="link" href="/">Projects</Nav.Link>
            <Nav.Link className="link" href="/">Contact</Nav.Link>
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
