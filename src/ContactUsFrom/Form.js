import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import AppAlert from "../Utilities/Alert/Alert";

function ContactUsForm() {
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
    };
    return (
        <>
            {
                _showToast ? <AppAlert title={_toastData.title
                } variant={_toastData.variant} message={_toastData.message} onClose={() => _setShowToast(false)
                } /> : null
            }
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
        </>
    );
}

export default ContactUsForm;