import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm } from "formik";
import Row from "react-bootstrap/Row";
import { ContentContainer } from "./contentcontainer";

export function FormComponent() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Formik
            initialValues={{
              BookName: "",
              AuthorName: "",
              PublishedDate: "",
              Isbnnumber: "",
              agreement: false,
            }}
            validate={(values) => {
              const errors = {};

              if (!values.BookName) {
                errors.BookName = "Required";
              } else if (/[^A-Za-z0-9\s_]/.test(values.BookName)) {
                errors.BookName = "Invalid characters entered";
              }

              if (!values.AuthorName) {
                errors.AuthorName = "Required";
              } else if (/[^A-Za-z0-9\s_]/.test(values.AuthorName)) {
                errors.AuthorName = "Invalid characters entered";
              }

              if (!values.Isbnnumber) {
                errors.Isbnnumber = "Required";
              } else if (/[^A-Za-z0-9\s_]/.test(values.Isbnnumber)) {
                errors.Isbnnumber = "Invalid characters entered";
              }

              if (!values.PublishedDate) {
                errors.PublishedDate = "Required";
              }

              if (!values.agreement) {
                errors.agreement = "You must agree before submitting.";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                navigate("/content", { state: { formValues: values } });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ handleChange, handleBlur, errors, dirty, handleSubmit }) => (
              <FormikForm onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={4}>
                    Book name
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      type="text"
                      placeholder="Book name"
                      name="BookName"
                    />
                    {dirty && !errors.BookName ? (
                      <p>Looks good</p>
                    ) : (
                      errors.BookName && <p className="">{errors.BookName}</p>
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={4}>
                    Author name
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      type="text"
                      placeholder="Author name"
                      name="AuthorName"
                    />

                    {dirty && !errors.AuthorName ? (
                      <p>Looks good</p>
                    ) : (
                      <errors className=""></errors> && (
                        <p className="">{errors.AuthorName}</p>
                      )
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={4}>
                    Isbn number
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      type="text"
                      placeholder="Isbn number"
                      name="Isbnnumber"
                    />
                    {dirty && !errors.Isbnnumber ? (
                      <p>Looks good</p>
                    ) : (
                      errors.Isbnnumber && (
                        <p className="">{errors.Isbnnumber}</p>
                      )
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                  <Form.Label column md={4}>
                    Published Date
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      type="Date"
                      placeholder="PublishedDate"
                      name="PublishedDate"
                    />

                    {dirty && !errors.PublishedDate ? (
                      <p>Looks good</p>
                    ) : (
                      <errors className=""></errors> && (
                        <p className="">{errors.PublishedDate}</p>
                      )
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                  <Col md={{ span: 8, offset: 4 }}>
                    <Form.Check
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      name="agreement"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                  <Col md={{ span: 8, offset: 4 }}>
                    <Button type="submit">Submit form</Button>
                  </Col>
                </Form.Group>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
