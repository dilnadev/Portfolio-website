import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";
import call_icon from "../../assets/assets/call_icon.svg";
import { useState } from "react";


const Contact = () => {


  const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3c281833-3984-4440-82a1-1cca4d65599a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      alert("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
     alert("Error submitting form ❌");
    }
  };



  return (
 <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm always open to new opportunities and conversations. Send me a message and let's connect.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>alex024@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>123456789</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>New York</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" required />
            <label htmlFor="">Write your message here</label>
            <textarea name="message"  rows='8'placeholder="Enter your message"></textarea>
        <button type="submit" className="contact-submit">Submit now</button>
        
        </form>
      </div>
    </div>
  );
};

export default Contact;
