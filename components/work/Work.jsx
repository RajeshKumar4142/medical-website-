// import React from 'react';
import OurWork from './OurWork';
import './work.css';

function Work() {
  return (
  <>
    <div className="container-fluid">
      <div className="work mt-5">
        <div className="col-md-4 left-content">
          <h6>ProFimed Global</h6>
          <h2>Why ProFimed</h2>
          <p>
            Knack helps healthcare organizations to optimize their revenue streams while minimizing administrative costs and improving patient satisfaction. Our experienced team of professionals understand the complexities of healthcare billing, Payer policies and reimbursement processes, this helps in improving our Healthcare Partner’s financial performance.
          </p>
          <div className="button_section">
            <a href="/contact" className="work_btn btn-primary"><span>Schedule a Demo</span></a>
          </div>
        </div>
        <div className="col-md-8 right-content">
          <div className="row">
            <div className="col-md-6 col-sm-12 box">
              <h3 className='work_h1'>01</h3>
              <h4>Experienced</h4>
              <p>
                Our experienced specialists understand your needs and are invested in helping your business run smoothly so you can focus on what matters: Your Patients.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 box">
              <h3 className='work_h1'>02</h3>
              <h4>Informed</h4>
              <p>
                We adapt to changing industry standards and best practices, which translates to time and revenue savings for our clients.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 box">
              <h3 className='work_h1'>03</h3>
              <h4>Reliable</h4>
              <p>
                Our experienced specialists understand your needs and are invested in helping your business run smoothly so you can focus on what matters: Your Patients.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 box">
              <h3 className='work_h1'>04</h3>
              <h4>Dedicated</h4>
              <p>
                We partner with you to identify savings and build scalable processes. Whether it's meeting your accounts receivable goals or reducing time spent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OurWork />
    <div className="container-fluid">
      <div className="work_section">
        <div className="col-md-6">
        <h6 className='work_h6'>ProFimed Global</h6>
          <h1 className='h1_text'>Who We Assist​</h1>
          <p>
          Knack Global is a comprehensive solution provider for Revenue Cycle Management, Technology and Staffing solutions for healthcare providers. From expansive hospital systems to specialized outpatient care, we have the expertise you can trust to simplify your billing process and get paid you faster.
          </p>
          <div className="button_work">
          <a href="/contact" className="text_btn btn-primary mt-5"><span>Learn More</span></a>
          </div>
         
        </div>
        <div className="col-md-6">
      <div className="work_image">
      <img src="https://knackglobal.com/wp-content/uploads/2023/03/Who-we-assist-1-1536x901.png" alt="" />
      </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Work;
