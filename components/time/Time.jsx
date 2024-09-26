import React from 'react'
import './time.css';
import { SlCalender } from "react-icons/sl";
import { BiPhoneCall } from "react-icons/bi";
function Time() {
  return (
    <>
    <div className="container">
       <div className="time mt-5 d-flex">
       <div className=" col-md-4 ">
          <div className="timtable">    
          <h2 className='time_h2 '>Opening Hours</h2>
          <p>Monday – Friday <span>8.00 – 18.00</span></p> 
             
          <p>Saturday<span>9.00 – 17.00</span></p> 
             
          <p>Sunday<span>9.00 – 15.00</span></p>   
          
          </div> 
              
        </div>
        <div className="col-md-4 ">
      
        <div className="timtable_text">
        <h2 className='time_h2 '>Doctors Timetable</h2>
          <p className='time_p'>Your treatment plan is designed for steady progress, with every phase promptly implemented.</p>   
          <div className="button_time">
          <a href="#doctor_timetable" className="time_btn btn-primary mt-5"><span><SlCalender />   View timetable</span></a>
          </div>

        </div>
        </div>
        <div className="col-md-4 ">
       
        <div className="timtable_cases"> 
        <h2 className='time_h2 '>Emergency Cases</h2>
         <h1 className='number_emg'><BiPhoneCall className='call_icon' />78078-31567</h1>
        <div className="number_p">
        <p>Your treatment plan is designed for steady progress, with every phase promptly implemented.</p>
        </div>
        </div>
        </div>
       
       </div>
       
    </div>
    
    </>
  )
}

export default Time