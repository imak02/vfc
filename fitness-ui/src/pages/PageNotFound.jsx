import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Image src="Page.webp" height="80%" fluid />
        </Row>
        <Row>
          <Col className="text-center">
            <Nav.Link
              as={NavLink}
              to="/"
              eventKey="homepage"
              className="mx-auto"
            >
              <h3 className="text-primary text-uppercase bg-warning d-inline-block">
                Goto Homepage{" "}
              </h3>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageNotFound;
