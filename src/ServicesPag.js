import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServicesPage.css";

const services = [
  { id: "wheel-straightening", title: "Wheel Straightening", description: "Repair bent wheels for safety.", icon: "fas fa-wrench" },
  { id: "cosmetic-repair", title: "Cosmetic Repair", description: "Fix scuffs, scratches, and minor damage.", icon: "fas fa-paint-brush" },
  { id: "complete-refurbishment", title: "Complete Refurbishment", description: "Full restoration of alloy wheels.", icon: "fas fa-tools" },
  { id: "diamond-cutting", title: "Diamond Cutting", description: "Precision cutting for a polished finish.", icon: "fas fa-gem" },
  { id: "wheel-personalization", title: "Wheel Personalization", description: "Customize with unique colors.", icon: "fas fa-spray-can" },
  { id: "caliper-painting", title: "Caliper Painting", description: "Stylish, durable painted brake calipers.", icon: "fas fa-palette" },
  { id: "wheel-alignment", title: "Wheel Alignment", description: "Proper alignment for better handling.", icon: "fas fa-car" },
  { id: "tire-sales", title: "Tire Sales", description: "Buy high-quality tires from top brands.", icon: "fas fa-shopping-cart" },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page container py-5" id="sr">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4 mb-4">
            <div 
              className="service-card shadow-sm p-4 text-center" 
              onClick={() => navigate(`/service/${service.id}`)}
              style={{ cursor: "pointer" }}
            >
              <i className={`${service.icon} service-icon`}></i>
              <h4 className="mt-3">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
