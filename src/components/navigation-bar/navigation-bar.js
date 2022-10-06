import React from "react";

import "./navigation-bar.css";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const NavigationBar = () => (
  <div className="navigation-bar">
    <Navbar collapseOnSelect bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <h1>Tom Tam</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mobile-nav">
          <Nav className="nav-items ms-auto text-center">
            <Nav.Link className="link" as={Link} to="/">
              About
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/business-consulting">
              Business Consulting
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/personal-couching">
              Personal Couching
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/spiritual-development">
              Spiritual Development
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/personal-finances">
              Financial Management
            </Nav.Link>
            <NavDropdown title="Global Events">
              <NavDropdown.Item className="drop-link" as={Link} to="/articles">
                Articles
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-link" as={Link} to="/blog">
                Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
