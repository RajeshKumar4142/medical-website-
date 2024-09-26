import React, { useState } from 'react';
import Slider from 'react-slick';
import TestimonialSlider from './TestimonialSlider';
import { CgArrowRight } from 'react-icons/cg';
import { IoClose } from "react-icons/io5";
import './service.css';

function Service() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_dme_suppliers.png', description: 'DME Suppliers', details: 'Knack Global is an end to end RCM service expert. Our specialized team supports DME and HME providers as they scale up, streamline, and deliver outstanding work.' },
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_eye_care_providers.png', description: 'Eye Care Providers', details: 'Detailed information about Eye Care Providers.' },
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_emr_ehr_software_providers.png', description: 'EMR/EHR Software Providers', details: 'Detailed information about EMR/EHR Software Providers.' },
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_hospitals_health_systems.png', description: 'Hospitals & Health Systems', details: 'Detailed information about Hospitals & Health Systems.' },
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_specialist_physician_groups.png', description: 'Specialist Physician Groups', details: 'Detailed information about Specialist Physician Groups.' },
    { src: 'https://knackglobal.com/wp-content/uploads/2023/07/img_rcm_service_providers.png', description: 'Medical Billing Service Providers', details: 'Detailed information about Medical Billing Service Providers.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <div className="about-header">
          {/* <h1>Services</h1> */}
        </div>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
              <img src={image.src} alt={`Gallery ${index}`} />
              <h4 className="gallery_h4">{image.description}</h4>
              <div className="gallery_button">
                <button className="ourwork_btn" onClick={() => handleImageClick(index)}>
                  <span>
                    Learn more<CgArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
  
        Modal for detailed information
        {/* {selectedImage !== null && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={handleClose}><IoClose /></span>
              <h2>{images[selectedImage].description}</h2>
              <p>{images[selectedImage].details}</p>
              <a href="#contact_us">Contact Us</a>
            </div>
          </div> */}
        )}
      </div>
   <TestimonialSlider/>
    </>
  );
}

export default Service;
