import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="https://mitishasoftech.in/img/meetisha-softech%20(4).png" alt="mitishasoftech" />
          <p>Since 2007, mitishasoftech Global has partnered with leading healthcare practitioners to streamline billing, accelerate payments, and remove barriers between patients and providers.</p>
          <div className="footer-search">
            <input type="text" placeholder="Search..." />
            <button><FaSearch /></button> 
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Our Solutions</h4>
            <ul>
              <li>Revenue Cycle Management</li>
              <li>Payment posting</li>
              <li>Charge Entry & Charge Audit</li>
              <li>Medical Coding Services</li>
              <li>Accounts Receivable Services</li>
              <li>Denial Management Services</li>
              <li>Provider Enrollment and Credentialing Services</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Who we assist</h4>
            <ul>
              <li>Hospitals & Health Systems</li>
              <li>DME Suppliers</li>
              <li>Specialist Physician Groups</li>
              <li>Medical Billing Service Providers</li>
              <li>EMR/EHR Software Providers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Purpose & Values</li>
              <li>Blog & Press Releases</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
            <div className="footer-social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Mitishasoftech. All rights reserved.</p>
      </div>
      </div>
    
    </footer>
  );
}

export default Footer;
