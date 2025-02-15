import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="container-fluid inquiry-section p-5" id="f" style={{background:"#fff5ee"}}>
      <div className="row">
        <div className="col-md-6 form-section">
          <h2>Inquiry Form</h2>
          <h3  style={{color:"#000000"}}> send your query we'll get back to you in day</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 map-section">
  <h2>Our Location</h2>
  <div className="map-container">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.72128772935264!2d72.6774604667985!3d23.105502910606635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81a4247f93d1%3A0xa3eea826fb0b4069!2sJay%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1739565404608!5m2!1sen!2sin"
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