import React from "react";
import { Col, Card } from "react-bootstrap";
import "./skills.css";
import html5 from "../../assets/html-5.svg";
import css3 from "../../assets/css3.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import reactNative from "../../assets/react-native.svg";
import graphql from "../../assets/graphql.svg";
import redux from "../../assets/redux.svg";
import materialui from "../../assets/material-ui.svg";
import bs from "../../assets/bootstrap.svg";
import git from "../../assets/git-squared.svg";
import github from "../../assets/github.svg";
import golang from "../../assets/golang.svg";
import pg from "../../assets/postgresql.svg";
import mysql from "../../assets/mysql.svg";
import gcp from "../../assets/gcp.svg";
import swift from "../../assets/swift.svg";
import ios from "../../assets/ios.svg";
import more from "../../assets/more.svg";

function Skills() {
  return (
    <Col>
      <div className="skillPaper">
        <br />
        <h2>Skills</h2>
        <br />
        <div className="skillContainer">
          <SkillCard title="HTML 5" source={html5} />

          <SkillCard title="CSS 3" source={css3} />

          <SkillCard title="JavaScript" source={js} />

          <SkillCard title="React" source={react} />

          <SkillCard title="React Native" source={reactNative} />

          <SkillCard title="GraphQL" source={graphql} />

          <SkillCard title="Redux" source={redux} />

          <SkillCard title="Material UI" source={materialui} />

          <SkillCard title="BootStrap" source={bs} />

          <SkillCard title="Git" source={git} />

          <SkillCard title="GitHub" source={github} />

          <SkillCard title="Golang" source={golang} />

          <SkillCard title="PostgreSQL" source={pg} />

          <SkillCard title="MySQL" source={mysql} />

          <SkillCard title="Google Cloud Platform" source={gcp} />

          <SkillCard title="Swift" source={swift} />

          <SkillCard title="iOS Development" source={ios} />

          <SkillCard title="And more!" source={more} />
        </div>
      </div>
    </Col>
  );
}

function SkillCard({ title, source }) {
  return (
    <Card
      style={{
        width: 150,
        alignItems: "center",
        marginRight: 5,
        marginBottom: 5,
      }}
    >
      <Card.Img
        variant="top"
        src={source}
        style={{ width: 100, height: 100 }}
      />
      <Card.Body style={{ alignItems: "center", textAlign: "center" }}>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Skills;
