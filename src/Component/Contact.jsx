import React from 'react'
import call from '../assets/Images/call.png'
import mail from '../assets/Images/mail.png'
import location from '../assets/Images/location.png'

function Contact() {
  return (
    <div>
      <div className='contact'>
        <h1>Get In Touch</h1>
      </div>
      <div className="contactus">
          <div className="contactbox">
            <div className="contactboxes">
            <img src={call} alt=''/>
             <h3>+91-9311296457</h3>
            </div>
            <div className="contactboxes">
              <img src={mail} alt=''/>
              <h3>chaitanya.semwal@appinventiv.com</h3>
            </div>
            <div className="contactboxes">
              <img src={location} alt=''/>
              <h3>1569 Ave, New York,
              NY 10028, USA</h3>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact