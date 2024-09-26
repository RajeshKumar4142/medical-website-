import React from 'react'
import './ourWork.css';
import { CgArrowRight } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { FcPositiveDynamic } from "react-icons/fc";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";

function OurWork() {
  return (
    <div className="container-fluid">
    <div className="our_work mt-5">
    <div className="col-md-8 right-content">
          <div className="row">
            <div className="col-md-6 col-sm-12  our_box">
            <FcPositiveDynamic  className="icon"  />
            <h5 className='our_work_h5'>Revenue Cycle Management</h5>
            <div className="ourwork_button">
            <a href="#Schedule" className="ourwork_btn  "><span>Schedule a Demo <CgArrowRight /></span></a>
          </div>
            </div>
            <div className="col-md-6 col-sm-12  our_box">
            <GiNotebook  className="icon"  />
            <h5 className='our_work_h5'>Revenue Cycle Management</h5>
            <div className="ourwork_button">
            <a href="#Schedule" className="ourwork_btn"><span>Schedule a Demo <CgArrowRight /></span></a>
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12  our_box">
            <MdOutlineMedicalServices className="icon"  />
             <h5 className='our_work_h5'>Revenue Cycle Management</h5>
             <div className="ourwork_button">
            <a href="#Schedule" className="ourwork_btn"><span>Schedule a Demo <CgArrowRight /></span></a>
          </div>
            </div>
            <div className="col-md-6 col-sm-12  our_box">
            <GiProgression className="icon"  />
            <h5 className='our_work_h5'>Revenue Cycle Management</h5>
            <div className="ourwork_button">
            <a href="#Schedule" className="ourwork_btn"><span>Schedule a Demo <CgArrowRight /></span></a>
          </div>
          
            </div>
          </div>
        </div>
       <div className="col-md-4 left-content">
        <h6>ProFimed Global</h6>
        <h2>Our Solutions​</h2>
        <p>
        From claims processing and denial management to accurate coding and efficient billing, our solutions are tailored to optimize your financial performance. Additionally, our provider credentialing services ensure that your healthcare organization meets all regulatory requirements, enabling smooth operations and enhanced credibility.


        </p>
        <div className="button_section">
          <a href="/solutions" className="work_btn"><span>Browse our Solutions</span></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OurWork