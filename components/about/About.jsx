// import React from 'react'
import './about.css';
import '../content/Content';
import Content from '../content/Content';

function About() {
  return (
  <>
  <div className="container-fliud">
  <div className="about">
     <div className="about_home">
     <h1 className='about_home_h1'>About</h1>
     <p>Home/About</p>
     </div>
    <div className="about_section  d-flex">
      <div className="col-md-6 ">
       <div className="img_about">
        <img src="https://img.freepik.com/free-psd/interior-view-operating-room-generative-ai_587448-1909.jpg?ga=GA1.2.325952049.1714993842&semt=sph" alt="" />
       </div>
      </div>
      <div className="col-md-6 about_text  mt-4">
        <h2 className='text_h1'>About Our Company</h2>
        <h4>Knack Global is a leading medical billing and consulting firm specializing in AI-driven billing solutions. Our team of experts have been providing AI-driven billing solutions to our clients for over 15 years. Our commitment to excellence and transparency is at the heart of our business model.</h4>

       <div className="about_button">
       <a href="#" className="btn btn-primary">Contact Us</a>
       </div>
      </div>
    </div>
    </div>
  </div>
  <Content/>
  
  </>
  )
}

export default About