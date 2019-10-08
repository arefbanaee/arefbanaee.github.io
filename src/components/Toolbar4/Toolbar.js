import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Navbar,
  Nav,
  // NavItem,
  // NavDropdown,
  // MenuItem,
  Image
} from "react-bootstrap";
// import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Toolbar.css";

const toolbar = props => {
  return (
    // <div style={{ width: "100%" }}>
    <Container fluid>
      <Row>
        <Col>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="rgb(12,173,200)"
            variant="dark"
            fixed="top"
            // bsPrefix={{ width: "100%" }}
            style={{ backgroundColor: "rgb(1, 19, 78)" }}
          >
            <Navbar.Brand href="#home">
              <AnchorLink href="#header">
                <Image
                  src={props.info.avatar}
                  alt="Avatar"
                  roundedCircle
                  className="toolbar__avatar"
                />
              </AnchorLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            {/* <div className="toolbar__spacer" /> */}
            <Navbar.Collapse className="toolbar__collapse">
              <Nav className="justify-content-end">
                {props.info.items.map(item => (
                  <Nav.Item>
                    <AnchorLink href={item.link}>
                      <Nav.Link href={item.link}>{item.title}</Nav.Link>
                    </AnchorLink>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default toolbar;
