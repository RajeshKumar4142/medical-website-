
import './content.css';
import CountUp from 'react-countup';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";

function    Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="col-md-5">
        <div className="text-section">
            <div className="background">
              <img src="https://knackglobal.com/wp-content/uploads/2023/03/line.svg" alt="" />
              </div>
        
          <h1 className='text_h1'>Medical Billing <br />Solutions for <br /> Healthcare Providers</h1>
          <p className='text_p'>We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing. </p>
          <a href="/contact" className="text_btn btn-primary"><span>Schedule a Demo</span></a>
        </div>
        </div>
        <div className="image-section">
          <img src="https://knackglobal.com/wp-content/uploads/2023/03/Baner-Image-1000px.webp" alt="Medical Center" />
        </div>
      </div>
      <div className="text_row"><hr /></div>
     <div className="text_service">
     <h1>Service</h1>
     </div>
    <div className="text_hr"><hr /></div>
   <div className="service">
   <div className="col-md-3 ">
    
     <div className="service_img">
     <FaUserDoctor  className="icon" />
       
     </div>
     <h2 className='icon_text'>Experienced Physicians</h2>
        <p className='icon_p'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
      </div>
      <div className="col-md-3 ">
      <FaHeartbeat  className="icon" />
     
      <h2 className='icon_text'>Personalized Treatment</h2>
      <p className='icon_p'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
      </div>
      <div className="col-md-3 ">
      <MdOutlineHealthAndSafety className="icon" />
   
      <h2 className='icon_text'>Quality and Safety</h2>
      <p className='icon_p'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
      </div>
      <div className="col-md-3 ">
      <MdOutlineMedicalServices className="icon" />
      
      <h2 className='icon_text'>Immediate Service</h2>
      <p className='icon_p'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
      </div>
   </div>
    <div className="counter-section mt-5 ">
        <div className="counter-item">
        <CountUp end={750} duration={10} suffix="+" className="count" />
          <h2>Medical Practices Served</h2>
          
        </div>
        <div className="counter-item">
        <CountUp end={125} duration={10} suffix="M" className="count"/>
          <h2>Transactions Per Year</h2>
       
        </div>
        <div className="counter-item">
        <CountUp end={97} duration={10} suffix="%" className="count" />
          <h2>Collection Rate</h2>
          
        </div>
      </div>
    </div>
    
  );
}

export default Content;
