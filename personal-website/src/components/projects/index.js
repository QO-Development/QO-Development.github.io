import React from "react";
import { Row, Col } from "react-bootstrap";
import vertlasScreenshot from "../../assets/vertlasScreenshot.png";
import todayteLogo from "../../assets/todayte.jpg";
import bg from "../../assets/bg.jpg";
import "./projects.css";

function Projects(props) {
  return (
    <>
      <Row style={{ marginTop: 20, justifyContent: "center" }}>
        <h2 id="projects" className="headerText">
          Projects
        </h2>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col lg={6}>
          <div className="imageContainer">
            <img
              alt="Vertlas screenshot"
              className="projectImage"
              src={vertlasScreenshot}
            />
          </div>
        </Col>

        <Col lg={6}>
          <div>
            <h5>Vertlas</h5>
            <p>
              A personal finance application built with React Native, SQLite,
              Golang, PostgreSQL, and Google Cloud Platform. This application
              also uses the Plaid API.
            </p>
            <p>
              Vertlas is an application I built to answer a simple question: how
              much money do I have in my checking account today, and will I have
              enough in the future to cover my expenses? The app is live{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/us/app/vertlas-simple-finance-tools/id1546771447"
              >
                here
              </a>
              , and the website is{" "}
              <a target="_blank" rel="noreferrer" href="https://vertlas.com/">
                here
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col lg={6}>
          <div className="imageContainer">
            <img alt="Todayte logo" className="logoImage" src={todayteLogo} />
          </div>
        </Col>
        <Col lg={6}>
          <h5>Todayte</h5>
          <p>
            Todayte was a brand new way to think about online dating. This
            application was built with Swift, Objective-C, PHP, MySQL, and ran
            on AWS. It also integrated with several Facebook API's.
          </p>
          <p>
            The app is no longer available in the app store, but you can see one
            of our old advertisements featuring the product in action{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=bIDX-7tstnE"
            >
              here
            </a>
            .
          </p>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col lg={6}>
          <div className="imageContainer">
            <img alt="Backup Genius Device" className="bgImage" src={bg} />
          </div>
        </Col>
        <Col lg={6}>
          <h5>Backup Genius/Photo Mojo</h5>
          <p>
            Backup Genius was an application designed to take all of a user's
            photos and store them on an attached USB drive. This project made
            use of a 3rd party SDK to store photos on an MFi approved device.
            The application and hardware combo was sold on QVC.
          </p>
          <p>
            This particular version of the app is no longer available in the app
            store, but you can see the source code{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/QO-Development/PhotoMojo"
            >
              here
            </a>
            . The current product can be seen{" "}
            <a
              target="_blank"
              href="https://thenewdealshop.com/products/clickfree"
            >
              here
            </a>
            .
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Projects;
