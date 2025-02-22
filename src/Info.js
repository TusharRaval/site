import React from "react";
import "./Info.css"; // Custom CSS for additional styling
import cp from './images/cp.png';

function Info() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row align-items-center header-section py-3">
        <div className="col-md-6 text-left">
          
        </div>
      </div>

      {/* Appointment Section */}
      <div className="row align-items-center appointment-section py-5">
        <div className="col-md-6 text-left">
          <h3 className="mb-3">SCHEDULE YOUR <span className="highlight-text">APPOINTMENT TODAY</span></h3>
          <p>
            Wheel Genius Refurbished Pvt Ltd always welcome enquiries. For any kind of information regarding Alloy Wheels Services,
            simply fill out the form with your relevant details and we will contact you soon.
          </p>
          <h1 className="location-title">AHMEDABAD</h1>
          <p>Shed No 52 Jay Industrial Park, Near Sankalp Industrial Estate Nana Chiloda Naroda GIDC Ahmedabad, Gujarat- 382330</p>
          <p>
            <strong>Phone:</strong> +91 77372 63790 <br />
            <strong>Email:</strong> <a href="mailto: info@wheelgeniusrefurbished.com" style={{textDecoration:"none", color:"#ffffff"}}> info@wheelgeniusrefurbished.com</a>
          </p>
          <h4>+91 78019 66355</h4>
         
        </div>
        <div className="col-md-6">
          <img
            src={cp} // Replace with actual image
            alt="Car"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
