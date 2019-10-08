import React from "react";

import "./About.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "../Carousel/Carousel";

const about = props => (
  <div
    className="about__wrapper"
    style={{
      width: "100%"
    }}
  >
    <div className="about__content" style={{ width: "100%" }}>
      <div className="about" style={{ paddingTop: window.innerHeight / 6 }}>
        <Container fluid>
          <Row>
            <Col
              lg={{ span: 1, offset: 2 }}
              xs={{ span: 12 }}
              className="text-center"
            >
              <p>About</p>
            </Col>
            <Col lg={{ span: 4 }}>
              <props.Content />
              {/* <div className="about__contents">{props.content}</div> */}
            </Col>
            <Col lg={{ span: 3 }} xs={{ span: 12 }}>
              <div style={{ width: "100%" }}>
                <Carousel images={props.images} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <div className="about__background">
      <div className="about__background-image">
        <img
          src="./images/ut/ut_gateway.jpg"
          style={{ width: "100%", height: window.innerHeight }}
          alt="ut_gateway"
        />
      </div>
      <div className="about__background-shadow-layer" />
    </div>
  </div>
);

export default about;
