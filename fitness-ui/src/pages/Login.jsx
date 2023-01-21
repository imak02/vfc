import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

import "./Login.scss";

const Login = () => {
  // const [isVisible, setIsVisible] = useState(true);
  return (
    <Formik
      initialValues={{ user: "", password: "" }}
      validationSchema={Yup.object({
        user: Yup.string().required("Required"),

        password: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Container className="login__container">
        <Row>
          <Col className="left">
            <Row className="logo__box">
              <Image
                src="logo.png"
                roundedCircle
                fluid
                alt="logo"
                className="logo "
              />{" "}
            </Row>
            <Form>
              <Row className="form__group mb-2">
                <label htmlFor="user" className="form__label">
                  Username/Email
                </label>
                <Field name="user" type="text" />
                <ErrorMessage
                  component="div"
                  name="user"
                  className="text-danger"
                />
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="password" className="form__label">
                  Password
                </label>

                <Field name="password" type="password" />

                {/* {isVisible ? (
                  <RxEyeOpen className="eyeIcon" />
                ) : (
                  <RxEyeClosed className="eyeIcon" />
                )} */}

                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-danger"
                />
              </Row>
              <Row className="mb-4 d-flex justify-content-end">
                <Link to="/"> Forgot password?</Link>
              </Row>

              {/* <button type="submit">Submit</button> */}

              <Row className="submitBtn">
                <Button variant="warning" type="submit">
                  Take me in!
                </Button>
                {/* <button type="submit">Submit</button> */}
              </Row>
            </Form>
            <hr />
            New Here? <Link to="/register">Signup</Link>
            or{" "}
            <Button>
              {" "}
              <FcGoogle /> Signin With Google
            </Button>
            <hr />
          </Col>
          <Col className="right d-none d-md-flex">
            <Image src="login.jpg" fluid thumbnail></Image>
          </Col>
        </Row>
      </Container>
    </Formik>
  );
};
export default Login;
