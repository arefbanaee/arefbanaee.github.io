import React from "react";

import "./HobbiesList.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";

import hobbies_info from "../../infos/hobbies/hobbies";

const hobbiesList = props => {
  return (
    <div className="hobbies-list">
      <Container fluid>
        <Row
          style={{
            paddingTop: window.innerHeight / 10,
            marginBottom: window.innerHeight / 10
          }}
        >
          <Col lg={{ span: 2, offset: 2 }}>
            <p className="hobbies__title  text-center">Hobbies</p>
          </Col>
          <Col lg={{ span: 6 }}>
            <Container fluid>
              <Row>
                {hobbies_info.map(hobby => (
                  <Col md={4} xs={6}>
                    <div className="hobbies-list__card">
                      <Card
                        title={hobby.title}
                        title_icon={hobby.title_icon}
                        title_image={hobby.title_image}
                        content={hobby.content}
                        background={hobby.background}
                        background_alt={hobby.background_alt}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default hobbiesList;
