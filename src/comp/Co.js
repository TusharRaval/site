import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../LandingPage.css';
import a from '../images/ie95id6g.png';
import b from '../images/ar.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import we from '../images/we.jpeg';
import ServicesPage from '../ServicesPage';
import AboutUs from '../AboutUs';
import OurTeam from '../OurTeam';
import Form from '../Form';
import Footer from '../Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../LandingPage.css';
import './Co.css';
import beforeImage from "../images/g1.png";
import afterImage from "../images/g2.png";
import au from '../images/au.png';
import be from '../images/be.png';
import bm from '../images/bm.png';
import ja from '../images/ja.png';
import mb from '../images/mb.png';
import { FaSearch, FaSoap, FaTools, FaPaintBrush, FaCheckCircle } from "react-icons/fa";
import { MdBuild } from "react-icons/md"; // Another icon option for cosmetic repairs


import UseScrollToSection from '../UseScrollToSection';


const Co = () => {

    UseScrollToSection();
    
    const [isBefore, setIsBefore] = useState(true);
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true); // Track navbar state

    const navigate = useNavigate();

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
    const teamRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileNavbar(); // Close navbar when navigating
    };

    return (
        <div className="landing-page">
              <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
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
                                                     <Link className="nav-link" to="/">Home</Link>
                                                     </li>
                                                     <li className="nav-item">
                                                     <Link className="nav-link" to="/#ab">About</Link>
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
                                                             <Link className="dropdown-item" to="/Ti" onClick={closeMobileNavbar}>Tyre Sales</Link>
                                                         </div>
                                                     </li>
                         
                                                     <li className="nav-item">
                                                     <Link className="nav-link" to="/#om">OurMotive</Link>
                                                     </li>
                                                     <li className="nav-item">
                                                     <Link className="nav-link" to="/#ot">Team</Link>
                                                     </li>
                                                     <li className="nav-item">
                                                     <Link className="nav-link" to="/#p">Pickup</Link>
                                                     </li>
                                                     <li className="nav-item">
                                                     <Link className="nav-link" to="/#f">Contact</Link>
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
            
            <div className="complete-refurbishment-section container-fluid py-5" id='cc'>
   <h2 className="text-center mb-5" style={{ fontSize: '46px', fontWeight: 'bold' }}>Complete Refurbishment of Alloy Wheels</h2>
   
       {/* Section 1 - Before & After Comparison */}
       <div className="row justify-content-center align-items-center mb-5 px-3 px-md-5">
       <div className="col-md-6 text-left">
     <h3 className="mb-3" style={{ fontSize: '46px', fontWeight: 'bold' }}>Before & After Transformation</h3>
     <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
       Click the image to view the transformation from a worn-out wheel to a like-new finish. 
       We restore all kinds of damage, including corrosion, curb rash, and discoloration, to give your wheels a fresh, flawless look.
     </p>
     <ul style={{ fontSize: '20px', fontWeight: 'bold' }}>
       <li>Repair and eliminate all visible damage, including chips, cracks, and deep scratches</li>
       <li>Apply a durable finish that resists wear, ensuring long-lasting protection</li>
       <li>Restore factory color or apply a custom finish to match your style preferences</li>
       <li>Complete sanding and polishing for a smooth and even surface</li>
       <li>Corrosion removal to prevent future damage and enhance wheel longevity</li>
       <li>High-temperature powder coating for superior resistance to environmental conditions</li>
       <li>Diamond cutting services for precision detailing and a sleek, modern appearance</li>
       <li>Sealing and clear coating to maintain the wheel's vibrant finish for years to come</li>
     </ul>
     <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
       Our comprehensive refurbishment process ensures that your alloy wheels not only look brand new but are also fortified to endure daily wear and tear. Whether you're aiming to restore your wheels or create a unique custom look, we have the expertise to exceed your expectations.
     </p>
   </div>
   
          <div 
                   className="col-md-6 d-flex justify-content-center position-relative" 
                   onClick={() => setIsBefore(!isBefore)} 
                   style={{ cursor: 'pointer' }}
                 >
                   <img 
                     src={isBefore ? beforeImage : afterImage} 
                     alt={isBefore ? "Before" : "After"} 
                     className="img-fluid rounded wheel-before-after-img" 
                     style={{ width: '300px', height: '300px' }}
                   />
                   <div 
                     className="overlay-text d-flex align-items-center justify-content-center" 
                     style={{
                       position: 'absolute',
                       top: 80,
                       left: 0,
                       width: '100%',
                       height: '100%',
                       color: '#ffffff',
                       fontSize: '18px',
                       fontWeight: 'bold',
                       textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                       
                       pointerEvents: 'none' // Allow clicks to propagate to the parent
                     }}
                   >
                     {isBefore ? "click for After rusult" : "click for Before rusult"}
                   </div>
                   </div>
       </div>
   
       {/* Section 2 - Brand Logos */}
       <h3 className="text-center mb-4" style={{ fontSize: '46px', fontWeight: 'bold' }}>Brands We Work With</h3>
       <div className="row justify-content-center px-3 px-md-5">
           <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
               <img src={au} alt="Audi" className="cali-wheel-img img-fluid" />
           </div>
           <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
               <img src={ja} alt="Jaguar" className="cali-wheel-img img-fluid" />
           </div>
           <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
               <img src={mb} alt="Mercedes Benz" className="cali-wheel-img img-fluid" />
           </div>
           <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
               <img src={bm} alt="BMW" className="cali-wheel-img img-fluid" />
           </div>
           <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
               <img src={be} alt="Bentley" className="cali-wheel-img img-fluid" />
           </div>
       </div>
   
       {/* Process Overview */}
       <div className="cali-process-overview my-5 text-center">
           <h3 style={{ fontSize: '46px', fontWeight: 'bold' }}>Our Refurbishment Process</h3>
          

    {/* Step-by-Step Process */}
    <div className="process-steps row mt-5">
        {/* Step 1 - Inspection */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaSearch className="process-icon mb-3" style={{ color: "#e67e22", fontSize: "50px" }} />
                <h4 className="process-title">Step 1: Inspection</h4>
                <p>Thorough inspection to assess damages, bends, and cracks. Identifying structural integrity and necessary repairs.</p>
            </div>
        </div>

        {/* Step 2 - Cleaning */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaSoap className="process-icon mb-3" style={{ color: "#1abc9c", fontSize: "50px" }} />
                <h4 className="process-title">Step 2: Cleaning</h4>
                <p>Deep cleaning to remove dirt, debris, and old finishes. Ensures a smooth surface for accurate repair and repainting.</p>
            </div>
        </div>

        {/* Step 3 - Straightening */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaTools className="process-icon mb-3" style={{ color: "#3498db", fontSize: "50px" }} />
                <h4 className="process-title">Step 3: Straightening</h4>
                <p>Precision equipment used to correct bends and warps. This ensures a smooth ride and enhanced wheel performance.</p>
            </div>
        </div>

        {/* Step 4 - Cosmetic Repair */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <MdBuild className="process-icon mb-3" style={{ color: "#e74c3c", fontSize: "50px" }} />
                <h4 className="process-title">Step 4: Cosmetic Repair</h4>
                <p>Chips, curb rash, and surface scratches repaired to restore aesthetics. Ensures the wheels look like new.</p>
            </div>
        </div>

        {/* Step 5 - Painting & Finishing */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaPaintBrush className="process-icon mb-3" style={{ color: "#9b59b6", fontSize: "50px" }} />
                <h4 className="process-title">Step 5: Painting & Finishing</h4>
                <p>Custom color options applied with precision. Protective coatings ensure durability and longevity.</p>
            </div>
        </div>

        {/* Step 6 - Final Quality Check */}
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaCheckCircle className="process-icon mb-3" style={{ color: "#2ecc71", fontSize: "50px" }} />
                <h4 className="process-title">Step 6: Quality Check</h4>
                <p>Comprehensive inspection to ensure structural integrity, balance, and finish. Ready for installation or delivery.</p>
            </div>
        </div>
    </div>
</div>
      
        </div>
              {/* Footer */}
              <Footer />
        </div>
    );
};
export default Co;
