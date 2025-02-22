import React, { useRef, useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './LandingPage.css';
import a from './images/ie95id6g.png';
import b from './images/ar.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import we from './images/we2.jpeg';
import ServicesPage from './ServicesPage';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Form from './Form';
import Footer from './Footer';
import OurMotive from './OurMotive';
import PickAndDrop from './PickAndDrop';
import UseScrollToSection from './UseScrollToSection';
import Info from './Info';
 import l1 from './images/l1.png';
 import l2 from './images/l2.png';
 import l3 from './images/l3.png';
 import l4 from './images/l4.png';
 import lan from './images/lan9.jpg';
import { px } from 'framer-motion';
import load from './images/load2.gif';
import lan2 from './images/lan2.jpg';
import lan5 from './images/lan5.jpg';

const LandingPage = () => {

    const [showVideoPopup, setShowVideoPopup] = useState(false);

    const [loading, setLoading] = useState(true);

  // Show loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

    // Trigger the YouTube pop-up after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideoPopup(true);
        }, 6500);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setShowVideoPopup(false);
    };

    UseScrollToSection();

    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true); // Track navbar state



   

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to toggle the dropdown in mobile view
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Function to close the navbar on mobile/tablet when a link is clicked
    const closeMobileNavbar = () => {
        if (isMobile) setNavbarCollapsed(true);
    };

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const moRef = useRef(null);
    const teamRef = useRef(null);
    const piRef = useRef(null);
    const contactRef = useRef(null);
    const infRef = useRef(null);

    const scrollToSection = (ref) => {
        
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileNavbar(); // Close navbar when navigating

    };

    if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <img
              src={load}
              alt="Loading..."
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        );
      }
      

    return (
        <div className="landing-page" id='l'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={we} alt="Alloy Wheels Collection" className="img-fluid we" />
                        Wheel Genius Refurbished Pvt Ltd
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={!navbarCollapsed}
                        onClick={() => setNavbarCollapsed(!navbarCollapsed)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(homeRef)}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
                            </li>

                            {/* Services Dropdown */}
                            <li
                                className="nav-item dropdown"
                                style={{ position: "relative" }}
                                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                                onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                            >
                               <button
  className="nav-link dropdown-toggle"
  onClick={isMobile ? toggleDropdown : undefined}
  aria-expanded={dropdownOpen}
  style={{
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
    display: "inline-block", // Ensure inline-block behavior
    width: "100px", // Lock a fixed width
    height: "40px", // Lock a fixed height
    lineHeight: "4px", // Ensures text stays vertically centered
  }}
>
  Services
</button>

                                <div
                                    className={`dropdown-menu ${dropdownOpen ? 'd-block' : ''}`}
                                    style={{
                                        position: "fixed",
                                        zIndex: 1000,
                                        display: dropdownOpen ? "grid" : "none",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "10px",
                                        padding: "10px",
                                        top: "7%",
                                        left: "50%",
                                        minWidth: "180px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        textAlign:"center",
                                    }}
                                >
                                    <Link className="dropdown-item" to="/wl" onClick={closeMobileNavbar}>Wheel Straightening</Link>
                                    <Link className="dropdown-item" to="/co" onClick={closeMobileNavbar}>Cosmetic Repair</Link>
                                    <Link className="dropdown-item" to="/com" onClick={closeMobileNavbar}>Complete Refurbishment</Link>
                                    <Link className="dropdown-item" to="/di" onClick={closeMobileNavbar}>Diamond Cutting</Link>
                                    <Link className="dropdown-item" to="/ca" onClick={closeMobileNavbar}>Caliper Painting</Link>
                                    <Link className="dropdown-item" to="/cu" onClick={closeMobileNavbar}>Customization</Link>
                                    <Link className="dropdown-item" to="/wh" onClick={closeMobileNavbar}>Wheel Personalization</Link>
                                    <Link className="dropdown-item" to="/Al" onClick={closeMobileNavbar}>Wheel Alignment</Link>
                                    <Link className="dropdown-item" to="/ti" onClick={closeMobileNavbar}>Tyre Sales</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(moRef)}>Our Motive</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(teamRef)}>Our Team</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(piRef)}>Picup</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(infRef)}>info</button>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="d-lg-flex justify-content-center mt-3 mt-lg-0 social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <section
  className="hero-section text-center text-lg-start"
  style={{
    position: "relative",
    color: "#ffffff",
    height: "100vh",
    overflow: "hidden",
  }}
  id="l"
>
  {/* ✅ Background Image Carousel */}
  <div
    id="heroCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
    data-bs-touch="true"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <div className="carousel-inner" style={{ height: "100%" }}>
      <div
        className="carousel-item active"
        style={{
          height: "100%",
          backgroundImage: `url(${lan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px)",
        }}
      ></div>
      <div
        className="carousel-item"
        style={{
          height: "100%",
          backgroundImage: `url(${lan2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px)",
        }}
      ></div>
      <div
        className="carousel-item"
        style={{
          height: "100%",
          backgroundImage: `url(${lan5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px)",
        }}
      ></div>
    </div>
  </div>

  {/* ✅ Hero Section Content (Text, etc.) */}
  <div
    className="hero-content"
    style={{
      position: "relative",
      zIndex: 2, // Keep text above the background
      padding: "10px",
    }}
  >
   
  </div>

  {/* ✅ Fixed Carousel Controls - Move Outside .carousel-inner */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="prev"
    style={{
      zIndex: 1000, // Higher than text
      position: "absolute",
      top: 0,
      left: 0,
      width: "15%", // Tap area
      height: "100%",
      background: "transparent",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      pointerEvents: "auto",
    }}
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
      style={{ filter: "brightness(100%)", width: "30px", height: "30px" }}
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="next"
    style={{
      zIndex: 1000, // Higher than text
      position: "absolute",
      top: 0,
      right: 0,
      width: "15%", // Tap area
      height: "100%",
      background: "transparent",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      pointerEvents: "auto",
    }}
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
      style={{ filter: "brightness(100%)", width: "30px", height: "30px" }}
    ></span>
    <span className="visually-hidden">Next</span>
  </button>




  {/* Content */}
  <div className="container d-flex flex-column flex-lg-row align-items-center py-5">
    <div className="hero-text me-lg-5 text-center text-lg-start">
      <h1 className="fw-bold" >Revive Your Ride – Premium Refurbished Alloy Wheels</h1>
      <p className="text-muted">
        Transform your wheels with expertly refurbished alloy options that offer both style and performance.
        Experience like-new looks and enhanced driving dynamics, all at a fraction of the cost of new wheels.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
        <a href="/resume.pdf" download="Alloy-Wheels-Brochure.pdf" className="btn btn-primary me-sm-3 my-2">
          Download Brochure
        </a>
        <a
          href="https://wa.me/8980662985"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success my-2"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>






            
            <section id='ab' ref={aboutRef}><AboutUs /></section>
            <section id='s' ref={servicesRef}><ServicesPage /></section>
            <section id='om' ref={moRef}><OurMotive /></section>
            <section id='ot' ref={teamRef}><OurTeam /></section>
            <section id='p' ref={piRef}><PickAndDrop /></section>
            <section id='f' ref={contactRef}><Form /></section>
            <section id='f' ref={infRef}><Info /></section>
            <Footer />
           
            {/* YouTube Video Modal */}
            {showVideoPopup && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ height:"600px", backgroundColor: 'rgba(0,0,0,0.5)',color:"#000000" }}>Watch Our Introduction Video
                    <div className="modal-dialog modal-lg"   style={{ height:"600px"}} role="document">
                        <div className="modal-content" style={{ height:"500px"}}>
                            <div className="modal-header">
                                <h5 className="modal-title">Watch Our Introduction Video</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closePopup}></button>
                            </div>
                            <div className="modal-body">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                        allowFullScreen
                                        title="YouTube Video"
                                        width="100%"
                                        height="300px"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closePopup}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        
            

        </div>



    );
};

export default LandingPage;

