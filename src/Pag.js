import React from "react";
import "./Pag.css";
import wheelsImg from "./images/stzj44q1.png"; 
import durabilityImg from "./images/9djy3i8j.png"; 
import customizationImg from "./images/0v64m1r3.png"; 

const Pag = () => {
  return (
    <div className="feature-page">

      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <span className="badge bg-warning px-3 py-2">Premium Alloy Wheels</span>
        <h1 className="hero-title mt-3">Enhance Your Ride with High-Performance Alloy Wheels</h1>
        <p className="hero-subtitle">
          Discover a wide range of stylish and durable alloy wheels that combine aesthetics with top-tier performance.
        </p>
    

      {/* Features Grid Section */}
      <section className="container feature-grid">
        <div className="row g-4">

          {/* Row 1: Main Feature - Alloy Wheels Showcase */}
          <div className="col-12">
            <div className="feature-card border rounded shadow-sm p-4 d-flex flex-column flex-lg-row align-items-center">
              <div className="flex-grow-1">
                <h5>Top-Quality Alloy Wheels</h5>
                <p>Choose from a variety of premium alloy wheels designed for durability and superior performance.</p>
              </div>
              <img src={wheelsImg} alt="Alloy Wheels Showcase" className="img-fluid rounded shadow-sm w-50" />
            </div>
          </div>

          {/* Row 2: Durability & Customization */}
          <div className="col-lg-6">
            <div className="feature-card border rounded shadow-sm p-4">
              <h5>Durable & Lightweight</h5>
              <p>Engineered for strength and reduced weight to improve vehicle efficiency and handling.</p>
              <img src={durabilityImg} alt="Durability Features" className="img-fluid rounded shadow-sm w-100" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-card border rounded shadow-sm p-4">
              <h5>Custom Finishes</h5>
              <p>Available in matte, gloss, and diamond-cut finishes to match your vehicle’s style.</p>
              <img src={customizationImg} alt="Customization Options" className="img-fluid rounded shadow-sm w-100" />
            </div>
          </div>

        </div>

        {/* Additional Features Section (3-Column Layout) 
     /*   <div className="row g-4 mt-5">
          <div className="col-lg-3 col-md-6">
            <div className="feature-card text-center border rounded shadow-sm p-4">
              <h5>Perfect Fit for All Vehicles</h5>
              <p>Wide range of sizes to ensure compatibility with various car models.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-card text-center border rounded shadow-sm p-4">
              <h5>Enhanced Performance</h5>
              <p>Improves braking efficiency, acceleration, and cornering stability.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="feature-card text-center border rounded shadow-sm p-4">
              <h5>Easy Online Ordering</h5>
              <p>Browse, customize, and order your wheels online with doorstep delivery.</p>
            </div>
          </div>
        </div> */}
        </section>
      </section>
    </div>
    
  );
};

export default Pag;
