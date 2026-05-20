import React from 'react';
import FooterLogo from '../asset/footer_logo.png'

const Footer = () => {
    return (
        <nav
            id="contact-section"
            className="navbar"
            style={{ backgroundColor: '#000', padding: '40px 40px', color: '#fff' }}
        >
            <div className="container-fluid">
                <div className="row">

                    {/* First div with logo and contact information */}
                    <div className="col-12 col-md-4 col-lg-4 d-flex">
                        <div>
                            <img
                                src={FooterLogo}
                                alt="University Logo"
                                style={{ width:'100px', paddingBottom:'10px' }}
                            />

                            <p>Reception: 91-612-2952344</p>

                            <p>
                                Address: 2nd Floor, Centres of Excellence Building,
                                Aryabhatta Knowledge University Campus,
                                Mithapur, Patna – 800001
                            </p>

                            <p>Email: nehasinha0326@gmail.com</p>
                        </div>
                    </div>

                    {/* Second div with heading and links */}
                    <div className="col-12 col-md-4 col-lg-4">

                        <h4>Important Links</h4>

                        <ul>
                            <li>
                                <a href="https://www.nda.gov.in/" className="dropdown-item">
                                    NDA
                                </a>
                            </li>

                            <li>
                                <a href="https://www.nptel.ac.in/" className="dropdown-item">
                                    NPTEL
                                </a>
                            </li>

                            <li>
                                <a href="https://www.swayam.gov.in/" className="dropdown-item">
                                    SWAYAM
                                </a>
                            </li>

                            <li>
                                <a href="https://www.swayamprabhay.gov.in/" className="dropdown-item">
                                    SWAYAM PRABHA
                                </a>
                            </li>

                            <li>
                                <a href="https://egyankosh.ac.in/" className="dropdown-item">
                                    EGYANKOSH
                                </a>
                            </li>
                        </ul>

                        {/* Social media links */}
                        <div>

                            <h4>Social Media</h4>

                            <ul>

                                <li>
                                    <a href="https://www.facebook.com">
                                        Facebook
                                    </a>
                                </li>

                                <li>
                                    <a href="https://twitter.com/">
                                        Twitter
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.youtube.com/">
                                        Youtube
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="col-12 col-md-4 col-lg-4">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3793705975636!2d85.13234851007088!3d25.592307115491625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1716984424125!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aryabhatta Knowledge University"
                        >
                        </iframe>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Footer;