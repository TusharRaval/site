import React from "react";
import "./OurTeam.css";
import team1 from "./images/l.png"; // Add team images in the images folder



const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: team1 },
  { name: "Sarah Smith", role: "Operations Manager", image: team1 },
  { name: "Mike Johnson", role: "Senior Technician", image: team1 },
  
];

const OurTeam = () => {
  return (
    <div className="our-team-page py-5" id="ot">
      <div className="container">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <p className="text-center mb-5">Dedicated professionals ensuring top-notch alloy wheel refurbishment.</p>

        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="team-card">
                <img src={member.image} alt={member.name} className="team-photo" />
                <h4 className="mt-3">{member.name}</h4>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
