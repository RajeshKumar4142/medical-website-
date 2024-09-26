import React from 'react';
import './casestudies.css';

function Casestudies() {
  return (
    <>
    <div className="casestudy">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text_section">
            <h6 className='work_h6'>ProFimed Global</h6>
            <h1 className='text_h1'>Case Study​​</h1>
            <p className='text_p'>
              <q>Knack Global partners with healthcare providers to identify the root causes of claim denials and reverse them, delivering time and cost savings to busy practices.</q>
            </p>
            <div className="button_case">
              <a href="/contact" className="text_btn btn-primary"><span>View All</span></a>
            </div>
          </div>
          <div className="col-md-4 text_input  mt-2">
            <div className="form">
              <h4 className='form_h4'>Sign up to access our weekly Resources​</h4>
              <form>
                <label htmlFor="email">Email <span className='required'>*</span></label>
                <input type="email" id="email" name="email" placeholder="Your email..." required />
                <button type="submit" className='work_btn'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="imagesection  mt-5 d-flex">
      <div className="col-md-6 ">
      <div className="img_sec">
      <img src="https://knackglobal.com/wp-content/uploads/2023/05/image_case-study_01.png" alt="" />
      </div>
      </div>
      <div className="col-md-6 ">
       <h2 className='img_sec_h2'>Case Study: Physician Group</h2>
       <p>Before partnering with Knack Global, Regional Eyecare managed the medical billing internally.</p>
       <div className="button_image mt-5">
              <a href="#View_All" className="text_btn btn-primary"><span>View Case Study</span></a>
            </div>
      </div>
    </div>
    <div className="imagesection  mt-5 d-flex">
      <div className="col-md-6 ">
      <h2 className='img_sec_h2'>Case Study: Channel Partners</h2>
       <p>Before partnering with Knack Global, one of the leading healthcare RCM Company was working with six other outsourced RCM partners.</p>
       <div className="button_image mt-5">
              <a href="#View_All" className="text_btn btn-primary"><span>View Case Study</span></a>
            </div>
      </div>
      <div className="col-md-6 ">
      <div className="img_sec">
      <img src="https://knackglobal.com/wp-content/uploads/2023/05/image_case-study_02.png" alt="" />
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

export default Casestudies;
