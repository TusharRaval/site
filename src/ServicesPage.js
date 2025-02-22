import React from "react";
import { motion } from "framer-motion";
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
  return (
    <motion.div
      className="services-page container py-5" id="sp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="col-12 col-sm-6 col-lg-4 mb-4"
            initial={{ y: 30, opacity: 0 }} // Slide in from below
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.7 }} // Stagger animations
            whileHover={{ scale: 1.05 }} // Subtle hover effect
          >
            <div className="service-card shadow-sm p-4 text-center" id="s" style={{ cursor: "default" }}>
              <i className={`${service.icon} service-icon`} style={{overflowY:"hidden"}}></i>
              <h4 className="mt-3">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
