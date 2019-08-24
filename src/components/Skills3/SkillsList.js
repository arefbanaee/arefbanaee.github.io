import React from "react";

import "./SkillsList.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skill from "./Skill";

import skills_info from "../../infos/skills/skills";

const skills = props => (
  <div className="skills-list">
    <Container fluid>
      <Row
        style={{
          paddingTop: window.innerHeight / 10,
          paddingBottom: window.innerHeight / 10
        }}
      >
        <Col lg={{ span: 2, offset: 2 }}>
          <p className="skills-list__title  text-center">Skills</p>
        </Col>
        <Col lg={{ offset: 1, span: 6 }}>
          <Container>
            <Row>
              {skills_info.map(skill => {
                return (
                  <Col md={2} xs={4}>
                    <div className="skills-list__skill">
                      <Skill
                        title={skill.title}
                        icon={skill.icon}
                        svg={skill.svg_icon}
                        value={skill.value}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default skills;
