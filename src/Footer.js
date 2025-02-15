import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import w from './images/we.jpeg';
import fu from './images/fu.png';
import lan from './images/lan.jpg'

const Footer = ({ homeRef, aboutRef, servicesRef, moRef, teamRef, piRef, contactRef }) => {
  const closeMobileNavbar = () => {
    // Add logic to close the mobile navbar
  };

  return (
    <footer className="footer" id="h"  style={{
        backgroundImage: `url(${lan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2c3e50",
        color: "#ffffff",
        padding: "40px 0"
      }}>
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="a">About Us</h5>
            <img src={w} alt="About Us" style={{ width: '100%', height: 'auto', padding: '5px' }} />
            <p>
              We provide high-quality alloy wheels for all types of vehicles. Our mission is to enhance your driving experience with stylish and durable wheels.
            </p>
            <img src={fu} alt="About_Us" style={{ width: '100%', height: 'auto', padding: '5px' }} />
          </div>

          {/* Quick Links Section 1 */}
          <div className="col-lg-2 col-md-6 col-12 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <Link className="dropdown-item" to="/#l">Home</Link>
              <Link className="dropdown-item" to="/#ab">About</Link>
              <Link className="dropdown-item" to="/#s">Service</Link>
              <Link className="dropdown-item" to="/#om">Our Motive</Link>
              <Link className="dropdown-item" to="/#ot">Our Team</Link>
              <Link className="dropdown-item" to="/#p">Pickup</Link>
              <Link className="dropdown-item" to="/#f">Contact</Link>
            </ul>
          </div>

          {/* Quick Links Section 2 */}
          <div className="col-lg-2 col-md-6 col-12 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <Link className="dropdown-item" to="/wl#w" onClick={closeMobileNavbar}>Wheel Straightening</Link>
              <Link className="dropdown-item" to="/co#c" onClick={closeMobileNavbar}>Cosmetic Repair</Link>
              <Link className="dropdown-item" to="/com#cc" onClick={closeMobileNavbar}>Complete Refurbishment</Link>
              <Link className="dropdown-item" to="/di#d" onClick={closeMobileNavbar}>Diamond Cutting</Link>
              <Link className="dropdown-item" to="/ca#ccc" onClick={closeMobileNavbar}>Caliper Painting</Link>
              <Link className="dropdown-item" to="/cu#cuc" onClick={closeMobileNavbar}>Customization</Link>
              <Link className="dropdown-item" to="/wh#ww" onClick={closeMobileNavbar}>Wheel Personalization</Link>
              <Link className="dropdown-item" to="/Al#aa" onClick={closeMobileNavbar}>Wheel Alignment</Link>
              <Link className="dropdown-item" to="/ti#t" onClick={closeMobileNavbar}>Tyre Sales</Link>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4" style={{backgroundColor:"transparent"}}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: info@whellgeniusrefurbished.com</li>
              <li>Phone: +91 89806 62985</li>
              <li>Phone-2: +91 78019 66355</li>
              <li>
                Address: Shed No 52 Jay Industrial Park, Near Sankalp Industrial Estate Nana Chiloda Naroda GIDC Ahmedabad, Gujarat- 382330
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-lg-2 col-md-6 col-12">
            <h5>Subscribe</h5>
            <p>Get the latest updates and offers directly in your inbox.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required style={{ padding: "5px", width: "100%", marginBottom: "10px" }} />
              <button type="submit" style={{ padding: "5px 10px", backgroundColor: "#e67e22", color: "#ffffff", border: "none" }}>Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Alloy Wheels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
