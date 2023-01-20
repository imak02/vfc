import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Register.scss";

const Register = () => {
  const [isCoach, setIsCoach] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "coach") {
      setIsCoach(true);
    } else {
      setIsCoach(false);
    }
  };

  const nameRegExp =
    /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;
  // const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const phoneRegExp =
    /(\+)?(977)?-?(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}/;
  const userNameRegExp = /^[a-z0-9_-]{3,15}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        gender: "",
        password1: "",
        password2: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, "*Name must have at least 2 characters")
          .matches(nameRegExp, "*Please enter a valid name")
          .max(100, "*Names can't be longer than 100 characters")
          .required("*Name is required"),

        lastName: Yup.string()
          .min(2, "*Name must have at least 2 characters")
          .matches(nameRegExp, "*Please enter a valid name")
          .max(100, "*Names can't be longer than 100 characters")
          .required("*Name is required"),

        email: Yup.string()
          .email("*Must be a valid email address")
          .max(100, "*Email must be less than 100 characters")
          .required("*Email is required"),

        userName: Yup.string()
          .min(3, "*Username must have 3-15 characters only")
          .max(15, "*Username must have 3-15 characters only")
          .matches(
            userNameRegExp,
            "*Can contain any lower case character, digit or special symbol “_-” only"
          )
          .required("*Username required"),

        phone: Yup.string()
          .matches(phoneRegExp, "*Phone number is not valid")
          .required("*Phone number required"),

        password1: Yup.string()
          .min(8, "*Password must contain minimum of 8 characters")
          .matches(
            passwordRegExp,
            "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
          )
          .required("*Password required"),

        password2: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Both passwords do not match."
        ),

        gender: Yup.string()
          .oneOf(["male", "female", "others"])
          .required("Please select an option"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Container className="form__container">
        <Row>
          <Col>
            <Form className="form">
              <Row className="form__group mb-2">
                <Field
                  as="select"
                  name="userType"
                  onChange={handleChange}
                  className="p-1"
                >
                  <option value="user">User</option>
                  <option value="coach">Coach</option>
                </Field>
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="firstName"
                />
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="lastName"
                />
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="userName">Username</label>
                <Field name="userName" type="text" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="userName"
                />
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="email"
                />
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="phone">Phone</label>
                <Field name="phone" type="text" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="phone"
                />
              </Row>

              <Row className="form__group mb-2">
                <div id="gender-radio-group">Gender</div>
                <div
                  role="group d-flex p-2"
                  aria-labelledby="gender-radio-group"
                >
                  <label>
                    <Field type="radio" name="gender" value="male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="female" />
                    Female
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="others" />
                    Others
                  </label>
                  <ErrorMessage
                    component="div"
                    className="error-message"
                    name="gender"
                  />
                </div>
              </Row>

              <Row className="form__group mb-2">
                <label htmlFor="password1">Password</label>
                <Field name="password1" type="password" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="password1"
                />
              </Row>
              <Row className="form__group mb-2">
                <label htmlFor="password2">Confirm Password</label>
                <Field name="password2" type="password" />
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="password2"
                />
              </Row>

              {isCoach && <h1>Hi</h1>}

              <button type="submit">Submit</button>
            </Form>
            <hr />
            Already have an account? <Link to="/login">Login</Link>
            or{" "}
            <button>
              {" "}
              <FcGoogle /> Signin With Google
            </button>
            <hr />
          </Col>
          <Col>
            <Image src="register.jpg" fluid></Image>
          </Col>
        </Row>
      </Container>
    </Formik>
  );
};

export default Register;
