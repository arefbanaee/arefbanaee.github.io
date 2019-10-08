import React from "react";

import "./ProjectsList.css";

import Project from "./Project";
import projectsInfo from "../../infos/projects/projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const projectsList = props => (
  // <ul className="list-unstyled">
  <div style={{ width: "100%" }}>
    <Container fluid>
      <Row
        style={{
          paddingTop: window.innerHeight / 10,
          paddingBottom: window.innerHeight / 10
        }}
      >
        <Col lg={{ offset: 2, spanl: 1 }}>
          <p className="projects__title text-center">Projects</p>
        </Col>
        <Col lg={{ span: 8 }}>
          <Container fluid>
            {projectsInfo.map(projectInfo => (
              <Project
                image={projectInfo.image}
                title={projectInfo.title}
                explanation={projectInfo.explanation}
                paper={projectInfo.paper}
                github={projectInfo.github}
              />
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
  // </ul>
);

export default projectsList;
