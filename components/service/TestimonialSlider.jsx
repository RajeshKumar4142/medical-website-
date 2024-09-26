import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import './testimonialSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Switching to this medical billing service transformed our practice. Their expertise in billing codes and insurance claims boosted our claim approval rates and reduced denials. Exceptional support and transparency have made our billing process more efficient and less stressful. Highly commendable attention to detail and client satisfaction.",

    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?ga=GA1.2.325952049.1714993842&semt=sph",
    name: "Dr. nitin"
  },

  {
    text: "This medical billing service has been a game-changer for us. Their expert handling of billing codes and claims has increased our approval rates and cut down denials. The level of support and clarity they provide is outstanding, making our billing process smooth and stress-free. Highly recommended!",

    image: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg?ga=GA1.2.325952049.1714993842&semt=sph",
    name: "Dr. Shadow"
  },

  {
    text: "Our practice has greatly benefited from this medical billing service. Their deep knowledge of billing regulations has improved our claim success rates and minimized denials. The service is transparent and efficient, which has significantly eased our administrative burden. Their commitment to quality is exceptional.",

    image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?ga=GA1.2.325952049.1714993842&semt=sph",
    name: "Dr. Ak Raj"
  },
];

function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

  // const handleNext = () => {
  //   sliderRef.current.slickNext();
  // };

  // const handlePrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  return (
    <div className='container'>
        <div className="say">
        <h1 className='hr_text'>what doctor say</h1>
        <div className="text_hr_test"><hr /></div>
        </div>
      <div className="testimonial_slide">
        {/* <div className="testimonial-buttons">
          <button className="btn-prev" onClick={handlePrev}>PREV</button>
          <button className="btn-next" onClick={handleNext}>NEXT</button>
        </div> */}
        <div className="testimonial-container">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="testimonial-text">
                  <h3 className='h1_text'><FaQuoteLeft className='icon' /> {testimonial.name} </h3>
                    <p className='testimonial-p'> {testimonial.text}</p>
                  </div>
                </div>
                <div className="testimonial-image-container">
                  <img src={testimonial.image} alt={`slide-${index}`} className="testimonial-image" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
