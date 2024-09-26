import React from 'react';
import './solutions.css';
import { FaCheckCircle } from "react-icons/fa";

function Solutions() {
  return (
    <>
    
      <div className="container">
        
        <div className="solution">
          <div className="content">
            <div className="col-md-6">
              <div className="text-section">
                <div className="background">
                  <img src="https://knackglobal.com/wp-content/uploads/2023/03/line.svg" alt="" />
                </div>
                <h1 className='text_h1'>Provider Enrollment & Credentialing Made Simple</h1>
                <p className='text_p'>We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing.</p>
                <a href="#Schedule" className="text_btn btn-primary"><span>Schedule a Demo</span></a>
              </div>
            </div>
            <div className="image-section">
              <img src="https://knackglobal.com/wp-content/uploads/2023/04/Header_Provider-Enrollment-Credentialing-Services-1536x1063.png" alt="Medical Center" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="work_section">
            <div className="col-md-6">
              <h6 className='work_h6'>ProFimed Global</h6>
              <h1 className='h1_text'>Who We Assist​</h1>
              <p>Knack Global is a comprehensive solution provider for Revenue Cycle Management, Technology and Staffing solutions for healthcare providers. From expansive hospital systems to specialized outpatient care, we have the expertise you can trust to simplify your billing process and get paid you faster.</p>
              <div className="button_work">
                <a href="#learn_more" className="text_btn btn-primary mt-5"><span>Learn More</span></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work_image">
                <img src="https://knackglobal.com/wp-content/uploads/2023/03/Who-we-assist-1-1536x901.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oursolution">
        <div className="container-fluid">
          <div className="home_solution">
            <div className="col-md-2">
              <ul className='side_menu'>
                <li><a href="">PAYMENT POSTING</a></li>
              </ul>
              <ul className='side_menu'>
                <li><a href="">CHARGE ENTRY & CHARGE AUDIT</a></li>
              </ul>
              <ul className='side_menu'>
                <li><a href="">CHARGE ENTRY & CHARGE AUDIT</a></li>
              </ul>
              <ul className='side_menu'>
                <li><a href="">PAYMENT POSTING</a></li>
              </ul>
              <ul className='side_menu'>
                <li><a href="">CHARGE ENTRY & CHARGE AUDIT</a></li>
              </ul>
              <ul className='side_menu_two'>
                <li><a href="">PROVIDER ENROLLMENT AND CREDENTIALING SERVICES</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="work_image_pay">
                <img src="https://knackglobal.com/wp-content/uploads/2023/04/Enrollment-Credentialing-Contracting-1-1536x1536.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h6 className='work_h6'>ProFimed Global</h6>
              <h1 className='h1_text'>Enrollment, Credentialing, & Contracting​</h1>
              <div className="span_work mt-4">
                <span><FaCheckCircle className='icon_work' />Network enrollment processes are not standardized, they’re complicated and time-consuming. They require continual monitoring to make sure the approval goes through.</span>
              </div>
              <div className="span_work mt-4">
                <span><FaCheckCircle className='icon_work' />We know how to navigate complex network contracts.</span>
                
              </div>
             
              <div className="button_work_two">
                <a href="#Talk_to_an_Expert" className="text_btn btn-primary mt-5"><span>Talk to an Expert</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work mt-5">
        <div className="col-md-8 left_content">
          <h6>ProFimed Global</h6>
          <h1 className='h1_text'>Awards and Recognition</h1>
          <p id='solution_p'>
          Trust and excellence are the pillars of our work. We’re proud to be recognized for our commitment to quality and compliance. When you choose us, you can rest assured that you’re partnering with a trusted provider that prioritizes the well-being of your organization and ensures the utmost protection of sensitive information. Experience award-winning excellence with us today!
          </p>
          <div className="button_section">
            <a href="#About_Us" className="work_btn btn-primary"><span>About Us</span></a>
          </div>
        </div>
        <div className="col-md-4 right-content">
          <div className="row">
            <div className="col-md-2 col-sm-12 box">
              <img src="https://knackglobal.com/wp-content/uploads/2023/07/TE.png" alt="" />
            </div>
            <div className="col-md-2 col-sm-12 box">
              {/* <h3 className='work_h1'>02</h3> */}
              {/* <h4>Informed</h4> */}
             <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-3.webp" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12 box">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-1.webp" alt="" />
            </div>
            <div className="col-md-2 col-sm-12 box">
             <img src="https://knackglobal.com/wp-content/uploads/2023/07/ISO.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="text_center">
      <div className="col-md-12 ">
          <h1 className='text_h1'>Get an Expert Assessment</h1>
          <p>Unlock the full potential of your medical practice. We understand the challenges you face in today’s healthcare landscape, and we’re here to help.  Take the first step towards optimizing your medical practice today.</p>
        <div className="button_center">
        <a href="#Talk_to_an_Expert" className="text_btn btn-primary"><span>Expert Assessment</span></a>
        </div>
        </div>
        
      </div>
      </div>
    </>
  );
}

export default Solutions;
