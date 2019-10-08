import React from "react";

import "./About.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "../Carousel/Carousel";

const about = props => (
  <div className="about">
    <Container fluid>
      <Row>
        <Col lg={{ span: 1, offset: 2 }}>
          <p>About</p>
        </Col>
        <Col lg={{ span: 4 }}>
          <props.Content />
          {/* <div className="about__contents">{props.content}</div> */}
        </Col>
        <Col lg={{ span: 3 }} sm={12}>
          <Carousel images={props.images} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default about;
