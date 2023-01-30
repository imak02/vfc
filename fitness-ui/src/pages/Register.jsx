import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Register.scss";

const Register = () => {
  const [isCoach, setIsCoach] = useState(false);

  const nameRegExp = /(^[A-Za-z]{2,16})/;
  // const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const phoneRegExp =
    /(\+)?(977)?-?(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}/;
  const userNameRegExp = /^[a-z0-9_-]{3,15}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const myValidationSchema = Yup.object({
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
      [Yup.ref("password1"), null],
      "Both passwords do not match."
    ),

    gender: Yup.string()
      .oneOf(["male", "female", "others"])
      .required("Please select an option"),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.set("userType", values.userType);
    formData.set("firstName", values.firstName);
    formData.set("lastName", values.lastName);
    formData.set("userName", values.userName);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("gender", values.gender);
    formData.set("password1", values.password1);
    formData.set("certification", values.certification);

    console.log(values);
    if (values.userType === "coach") {
      setIsCoach(true);
    }

    mutate(formData);
  };

  return (
    <Formik
      initialValues={{
        // selectedOption: "Free",
        userType: "user",
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        gender: "",
        password1: "",
        password2: "",
        certification: "",
      }}
      validationSchema={myValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize

      // {(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}
    >
      {({ values, setFieldValue }) => (
        <Container className="register__container">
          <Row>
            <Col className="left">
              <Row className="logo__box text-center">
                <Image
                  src="logo.png"
                  roundedCircle
                  fluid
                  alt="logo"
                  className="logo"
                />{" "}
              </Row>
              <Form className="form">
                <Row className="form__group mb-2">
                  <label htmlFor="userType" className="form__label">
                    Choose your role
                  </label>
                  <Field
                    as="select"
                    name="userType"
                    onChange={(e) => {
                      setFieldValue("userType", e.target.value);
                      if (e.target.value === "coach") {
                        setIsCoach(true);
                      } else if (e.target.value === "user") {
                        setIsCoach(false);
                      } else {
                        setIsCoach(false);
                      }
                    }}
                    className="p-1"
                  >
                    <option value="user">User</option>
                    <option value="coach">Coach</option>
                  </Field>
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="firstName" className="form__label">
                    First Name
                  </label>
                  <Field name="firstName" type="text" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="firstName"
                  />
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="lastName" className="form__label">
                    Last Name
                  </label>
                  <Field name="lastName" type="text" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="lastName"
                  />
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="userName" className="form__label">
                    Username
                  </label>
                  <Field name="userName" type="text" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="userName"
                  />
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                  <Field name="email" type="email" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="email"
                  />
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="phone" className="form__label">
                    Phone
                  </label>
                  <Field name="phone" type="text" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="phone"
                  />
                </Row>

                <Row className="form__group mb-2">
                  <div id="gender-radio-group" className="form__label">
                    Gender
                  </div>
                  <div
                    role="group "
                    aria-labelledby="gender-radio-group"
                    className="d-flex flex-row justify-content-between gap-2"
                  >
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="me-2"
                      />
                      Male
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="me-2"
                      />
                      Female
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="others"
                        className="me-2"
                      />
                      Others
                    </label>
                    <ErrorMessage
                      component="div"
                      className="error-message text-danger"
                      name="gender"
                    />
                  </div>
                </Row>

                <Row className="form__group mb-2">
                  <label htmlFor="password1" className="form__label">
                    Password
                  </label>
                  <Field name="password1" type="password" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="password1"
                  />
                </Row>
                <Row className="form__group mb-2">
                  <label htmlFor="password2" className="form__label">
                    Confirm Password
                  </label>
                  <Field name="password2" type="password" />
                  <ErrorMessage
                    component="div"
                    className="error-message text-danger"
                    name="password2"
                  />
                </Row>

                {isCoach && (
                  <Row className="form__group mb-3">
                    <label htmlFor="certification" className="form__label">
                      Upload your certification
                    </label>
                    <Field name="certification" type="file" />{" "}
                  </Row>
                )}

                <Row className="submitBtn">
                  <Button variant="warning" type="submit">
                    Register me!
                  </Button>
                  {/* <button type="submit">Submit</button> */}
                </Row>
              </Form>
              <hr />
              Already have an account? <Link to="/login">Login</Link>
              or{" "}
              <Button>
                {" "}
                <FcGoogle /> Sign Up With Google
              </Button>
              <hr />
            </Col>
            <Col className="right d-none d-md-flex">
              <Image src="register.jpg" fluid thumbnail></Image>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default Register;
