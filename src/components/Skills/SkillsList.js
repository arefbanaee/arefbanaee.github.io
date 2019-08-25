import React from "react";

import "./SkillsList.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skill from "./Skill";

import skills_info from "../../infos/skills/skills";

const skills = props => (
  <div className="skills-list">
    <Container>
      <Row>
        <Col xs={1} />
        {skills_info.map(skill => (
          <Col xs={1}>
            <div className="skills-list__skill">
              <Skill
                title={skill.title}
                icon={skill.icon}
                value={skill.value}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default skills;
