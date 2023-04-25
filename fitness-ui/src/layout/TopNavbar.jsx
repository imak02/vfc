import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link } from "react-router-dom";

import "./TopNavbar.scss";

let isLoggedIn = false;

const TopNavbar = () => {
  return (
    <div>
      {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
      <Navbar bg="warning" expand="md" className="mb-3">
        <Container fluid className="bg-info ">
          <Navbar.Brand className="d-flex ms-5" href="#">
            Fitness Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 mx-5 gap-5 justify-content-center align-items-center ">
                <Nav.Link
                  as={NavLink}
                  to="/"
                  eventKey="home"
                  className="ms-md-auto"
                  // className={({ isActive }) =>
                  //   isActive ? `activeNavItem ms-auto` : "ms-auto"
                  // }
                >
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" eventKey="about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/diet" eventKey="diet">
                  Diet
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/blog"
                  eventKey="blog"
                  className="me-md-auto"
                >
                  Blog
                </Nav.Link>

                {isLoggedIn ? (
                  <NavDropdown
                    key="profile"
                    title={
                      <Image
                        src="/Profile.jpeg"
                        className="navbar--profileImg d-inline-block align-top rounded-circle"
                      />
                    }
                    drop="down"
                    id={`offcanvasNavbarDropdown-expand-md`}
                    align="end"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/profile/hihello"
                      eventKey={1.1}
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/login">
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    eventKey="login"
                    className="align-items-center flex-shrink-1"
                  >
                    Login
                  </Nav.Link>
                )}
              </Nav>
              {/* <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* ))} */}
    </div>
  );
};

export default TopNavbar;

{
  /* <Nav.Link
                    as={NavLink}
                    to="/profile/somerandomid"
                    eventKey="login"
                    className="align-items-center flex-shrink-1"
                  >
                    <Image
                      src="/Profile.jpeg"
                      // height="30px"
                      // width="30px"
                      className="navbar--profileImg d-inline-block align-top rounded-circle mr-2"
                      // roundedCircle
                    />
                  </Nav.Link> */
}
