import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import "./ContactUs.css";

import address from "./address.svg";
import map from "./map.svg";
import supportMale from "./supportMale.svg";
import mail from "./mail.svg";
import AppFooter from "../AppFooter/AppFooter";
import AppAlert from "../Utilities/Alert/Alert";

function ContactUs() {
  const [isLoading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [_showToast, _setShowToast] = useState(false);
  const [_toastData, _setToastData] = useState({
    title: "",
    message: "",
    variant: "",
    key: ""
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hanldeShowToast = (key, title, message, variant) => {
    _setShowToast(true);
    _setToastData({
      title: title,
      message: message,
      variant: variant,
      key: key
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      e.stopPropagation();
      const invalidFields = Array.from(form.elements).filter(
        (field) => field.tagName === 'INPUT' || field.tagName === 'TEXTAREA' || field.tagName === 'SELECT'
      ).filter((field) => !field.validity.valid);

      invalidFields.forEach((field) => {
        console.log(field);
        console.log(`Field Name: ${field.name}`);
        console.log(`Validation Error: ${field.validationMessage}`);
      });

      // Example: Display a toast for the first invalid field
      if (invalidFields.length > 0) {
        hanldeShowToast(
          'form-validation',
          'Invalid Data!',
          `Field "${invalidFields[0].label}" is invalid: ${invalidFields[0].validationMessage}`,
          'danger'
        );
      }

      return;
    }

    setLoading(true);
    // Prepare the payload based on your form data
    const payload = {
      LastName: formData.name || "Unknown", // Salesforce requires a LastName
      Email: formData.email,
      MobilePhone: formData.contactNumber,
      Company: formData.companyName || "Not Specified",
      ProductInterest__c: formData.service,
      Description: formData.message,
      LeadSource: "Web",
    };

    try {
      const response = await fetch('https://dasitcom-dev-ed.my.salesforce.com/services/data/v62.0/sobjects/Lead/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 00D5j0000036EBS!AREAQA_10Ai610e79S7EPhS_WjPiu8GfhetYY1aL7FaqRDBDWtkpgw08BcOeA0LyPvvrAwtjNYBnHnxKfbZfHS7J5jTydxSH',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Lead created successfully in Salesforce!');
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          companyName: '',
          service: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        alert('Failed to create lead. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
    setLoading(false);
  };
  return (
    <>
      {
        _showToast ? <AppAlert title={_toastData.title} variant={_toastData.variant} message={_toastData.message} onClose={() => _setShowToast(false)} /> : null
      }
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="contact-us">
              <div>
                <h1 className="project-waving-text">Let’s connect with us</h1>
                <div className="connect-items">
                  <img src={address} alt="Address" className="connect-icon" />
                  <span>
                    D-65, Udyog Vihar, Phase-V, Sector-19, Gurgaon, Haryana
                    122016, India
                  </span>
                </div>
                <div className="connect-items">
                  <img src={map} alt="Map" className="connect-icon" />
                  <span>Find us on the map</span>
                </div>
                <div className="connect-items">
                  <img src={supportMale} alt="Call us" className="connect-icon" />
                  <span>+91 9876543210</span>
                </div>
                <div className="connect-items">
                  <img src={mail} alt="Mail us" className="connect-icon" />
                  <span>info@projectone.com</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Form noValidate validated={validated} className="contact-form" onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
                <Form.Control type="text" required placeholder="John Doe" name="name" label="Full Name" value={formData.name} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
                <Form.Control type="email" required placeholder="johndoe@gmail.com" name="email" value={formData.email} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Contact Number" className="mb-3">
                <Form.Control type="number" required placeholder="9876543210" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Company Name" className="mb-3">
                <Form.Control type="text" required placeholder="XYZ Corp" name="companyName" value={formData.companyName} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="Choose a service" style={{ marginBottom: '1rem' }}>
                <Form.Select required name="service" value={formData.service} onChange={handleChange}>
                  <option value="">--None--</option>
                  <option value="Social Media Management (SMM)">Social Media Management (SMM)</option>
                  <option value="Search Engine Optimisation (SEO)">Search Engine Optimisation (SEO)</option>
                  <option value="Public Relation (PR)">Public Relation (PR)</option>
                  <option value="Paid Ads">Paid Ads</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="Content Solution">Content Solution</option>
                  <option value="Influencer Marketing">Influencer Marketing</option>
                  <option value="Film & Photography">Film & Photography</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Write something message yourself" className="mb-3">
                <Form.Control as="textarea" required placeholder="Leave a message here" style={{ height: '100px' }} name="message" value={formData.message} onChange={handleChange} />
              </FloatingLabel>
              <Button variant="primary" size="lg" style={{ width: '100%' }} type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <AppFooter />
    </>
  );
}

export default ContactUs;
