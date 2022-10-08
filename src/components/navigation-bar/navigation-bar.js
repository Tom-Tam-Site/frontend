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
            <Nav.Link className="link" as={Link} to="/consulting">
              Consulting
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/coaching">
              Coaching
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/spirituality">
              Spirituality
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/finance">
              Finance
            </Nav.Link>
            <NavDropdown title="News">
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
