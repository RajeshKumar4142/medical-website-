import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   //backend//
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="info-container">
            <h1 className="cont_h1">CONTACT US</h1>
            <p>Home / Contact</p>
            <iframe className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13722.311912505842!2d76.6829928!3d30.702148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721626713362!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-container">
            <h1 className='contact_h1'>Get In Touch With US</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
      <h1 className='our_h1'>Our Global Presence</h1>
      <div className="big_image">
        <img src="https://knackglobal.com/wp-content/uploads/2024/05/World.png" alt="big_image" />
      </div>
    </div>
    </>
  );
}

export default Contact;
