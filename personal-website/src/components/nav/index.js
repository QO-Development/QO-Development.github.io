import React from 'react';
import './nav.css';
import twitterIcon from '../../assets/twitter.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';

class Nav extends React.Component {

  render() {

    return(
      
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>

        <div className="container-fluid">
          <a className="navbar-brand" href="/">Hawthorne Hacks</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/hawtcode"><img src={twitterIcon}></img></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/QO-Development"><img src={githubIcon}></img></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/joshuahawthorne/"><img src={linkedinIcon}></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;  