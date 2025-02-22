import React from 'react';
import './Form.css';
import { useState } from 'react';
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    alert("submited");
    setFormData({  name: "",
      email: "",
      phone: "",
      message: "",})


    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="container-fluid inquiry-section p-5" id="f" style={{ background: "#fff5ee" }}>
      <div className="row">
        <div className="col-md-6 form-section">
          <h2>Inquiry Form</h2>
          <h3 style={{ color: "#000000" }}>Send your query, we'll get back to you in a day</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {status && <p className="mt-3">{status}</p>}
        </div>

        <div className="col-md-6 map-section">
  <h2>Our Location</h2>
  <div className="map-container">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d917.4454336625221!2d72.6754105285041!3d23.105084532219838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA2JzE4LjMiTiA3MsKwNDAnMzMuOCJF!5e0!3m2!1sen!2sin!4v1740223514500!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

        </div>
      </div>
  
  );
};

export default Form;