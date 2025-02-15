import React from "react";
import "./FeatureCards.css";
import a from "./images/jfy7pn88.png";

const FeatureCards = () => {
  return (
    <div className="landing-pa">
      {/* Features Section */}
      <section className="feature-section container text-center py-5">
        <span className="badge bg-primary">Premium Alloy Wheels</span>
        <h1 className="hero-title">Your Ultimate Destination for Stylish & Durable Alloy Wheels</h1>
        <p className="hero-subtitle">
          Explore high-performance alloy wheels designed for both performance and aesthetics. Choose from premium selections that fit your ride perfectly!
        </p>

        {/* Feature Image */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 text-center">
            <img src={a} alt="Alloy Wheels Showcase" className="hero-image img-fluid" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="row justify-content-center mt-4">
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card">
            <h5>Wide Range of Designs</h5>
            <p>Find the perfect set of alloy wheels, from sleek modern styles to aggressive off-road designs.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card highlight">
            <h5>High-Performance Materials</h5>
            <p>Crafted from premium aluminum for lightweight strength and enhanced durability.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card">
            <h5>Custom Finishes</h5>
            <p>Choose from matte, gloss, or diamond-cut finishes to match your car’s aesthetics.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card">
            <h5>Perfect Fit for Any Car</h5>
            <p>Available in multiple sizes and bolt patterns for a seamless fit.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card">
            <h5>Easy Online Ordering</h5>
            <p>Browse, customize, and order your wheels online with doorstep delivery.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 feature-card">
            <h5>Expert Support</h5>
            <p>Get expert guidance to choose the best alloy wheels for your vehicle.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureCards;
