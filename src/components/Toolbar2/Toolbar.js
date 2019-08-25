import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from "react-bootstrap";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

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
            bg="dark"
            variant="dark"
            fixed="top"
            className="toolbar"
            // bsPrefix={{ width: "100%" }}
          >
            <button
              aria-controls="responsive-navbar-nav"
              type="button"
              aria-label="Toggle navigation"
              onClick={props.drawerClickHandler}
              className="toolbar_toggle-button"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <Navbar.Brand href="#home">
              <a href="/">
                <Image
                  src={props.info.avatar}
                  alt="Avatar"
                  roundedCircle
                  className="toolbar__avatar"
                />
              </a>
            </Navbar.Brand>
            {/* <Navbar.Toggle onClick={props.drawerClickHandler} /> */}
            <div className="toolbar__spacer" />
            <Navbar.Collapse className="toolbar__collapse">
              <Nav className="justify-content-end">
                {props.info.items.map(item => (
                  <Nav.Item>
                    <Nav.Link href={item.link}>{item.title}</Nav.Link>
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
