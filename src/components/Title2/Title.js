import React from "react";

import "./Title.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const title = props => (
  <div className="title__row">
    <Container fluid>
      <Row>
        <Container bsPrefix="title__container">
          <Row>
            <Col>
              <div className="title__name">{props.name}</div>
            </Col>
          </Row>
          <Row>
            {/* <Col className="title__university">{props.university}</Col> */}
          </Row>
          <Row>{/* <Col className="title__field">{props.field}</Col> */}</Row>
          <Row>{/* <Col className="title__extera">{props.extera}</Col> */}</Row>
        </Container>
        <Container bsPrefix="title__container">
          <Row>
            <Col>
              <div className="title__extera">{props.extera}</div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  </div>
);

export default title;
