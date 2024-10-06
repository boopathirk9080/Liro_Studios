// import React from 'react';
// import './index.css';
// import ParticleBackground from './ParticleBackground';

// const Services = () => {
//   return (
//     <section id="services" className="services-section">
//       {/* <ParticleBackground /> */}
//       <h2>What We Can Do For You</h2>
//       <h3>Services we can help you with</h3>
//       <div className="services-container">
//         <div className="service-card">
//           <h4>Digital marketing</h4>
//           <p>Simply drag and drop photos and videos into your workspace to...</p>
//           <a href="#online-marketing">Find out more</a>
//         </div>

//         <div className="service-card">
//           <h4>Graphical Designing</h4>
//           <p>Simply drag and drop photos and videos into your workspace to...</p>
//           <a href="#design">Find out more</a>
//         </div>
//         <div className="service-card">
//           <h4>Web Development</h4>
//           <p>Simply drag and drop photos and videos into your workspace to...</p>
//           <a href="#development">Find out more</a>
//         </div>
//         <div className="service-card">
//           <h4>VFX & Studio support</h4>
//           <p>Simply drag and drop photos and videos into your workspace to...</p>
//           <a href="#development">Find out more</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import dm from "../assets/service/digitalMarketing.png";
import gd from "../assets/service/graphicalDesign.png";
import wd from "../assets/service/webDev.png";
import vfx from "../assets/service/vfx.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h3>What We Can Do For You</h3>
          <h2>Services we can help you with</h2>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <img src={dm} alt="Digital Marketing Icon" />
            </div>
            <h4>Digital marketing</h4>
            <Link to="/digitalmarketing">Find out more</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={gd} alt="Graphical Designing Icon" />
            </div>
            <h4>Graphical Designing</h4>
            <Link to="/graphicalDesign">Find out more</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={wd} alt="Web Development Icon" />
            </div>
            <h4>Web Development</h4>
            <Link to="/webDevelopment">Find out more</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={vfx} alt="Multimedia Creation" />
            </div>
            <h4>Multimedia Creation</h4>
            <Link to="/multimedia">Find out more</Link>
          </div>
        </div>

        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
