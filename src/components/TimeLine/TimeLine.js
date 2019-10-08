import React from "react";

import "./TimeLine.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timeLine = props => (
  <div className="time-table">
    <Container fluid>
      <Row style={{ background: "rgb(242, 242, 242)" }}>
        <Col lg={{ offset: 2, span: 2 }}>
          <p
            style={{ marginTop: window.innerHeight / 10 }}
            className="time-table__title  text-center"
          >
            Experiences
          </p>
        </Col>
        <Col
          lg={{ offset: 1, span: 4 }}
          xs={{ span: 12 }}
          className="text-center"
          style={{ marginTop: window.innerHeight / 10 }}
        >
          <VerticalTimeline>
            {props.elements.map(element => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work time-table__info"
                date={element.data}
                iconStyle={{
                  background: "rgb(186, 186, 186)",
                  color: "green"
                }}
                //   icon={<WorkIcon />}
              >
                <div
                  style={{
                    borderTop: "0.1vw rgb(1, 19, 78) solid"
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {element.subtitle}
                  </h4>
                  <p className="text-justify">{element.info}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Col>
      </Row>
    </Container>
  </div>
);

export default timeLine;
