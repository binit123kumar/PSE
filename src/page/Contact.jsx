import React, { useState } from 'react';

const Contact = () => {
    // Form fields state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted Data:', formData);
        alert('Thank you! Your message has been sent successfully.');
        
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="py-5 bg-light min-vh-100">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary display-5">Contact Us</h1>
                    <p className="text-muted lead">Get in touch with us for any inquiries or support.</p>
                </div>

                <div className="row g-4 justify-content-between">
                    {/* Column 1: Contact Information (No Logo) */}
                    <div className="col-12 col-md-4 col-lg-4 d-flex">
                        <div className="p-4 bg-white border rounded shadow-sm w-100">
                            <h4 className="mb-4 fw-semibold text-dark border-bottom pb-2">Contact Information</h4>

                            <p className="mb-3">
                                <strong>Reception:</strong> 91-612-2952344
                            </p>

                            <p className="mb-3">
                                <strong>Address:</strong> 2nd Floor, Centres of Excellence Building,
                                Aryabhatta Knowledge University Campus,
                                Mithapur, Patna – 800001
                            </p>

                            <p className="mb-0">
                                <strong>Email:</strong> <a href="mailto:nehasinha0326@gmail.com" className="text-primary text-decoration-none">nehasinha0326@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Contact Form */}
                    <div className="col-12 col-md-7 col-lg-7">
                        <div className="p-4 bg-white border rounded shadow-sm">
                            <h3 className="mb-4 fw-semibold">Send Message</h3>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-medium">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label fw-medium">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this regarding?"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-medium">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message details here..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm">
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;