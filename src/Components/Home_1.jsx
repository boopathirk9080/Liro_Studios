import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home_1.css';

export const Home_1 = () => {
  const [text] = useTypewriter({
    words: ["VFX and Studio Support.", "Graphical Designing.", "Digital Marketing."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <div className='r1'>
      {/* Navigation bar */}
      

      {/* Home section */}
      <div className="home-container">
        <div className="left-section">
          <h1 className="heading">Get join with <span className="highlight">LIRO Studios</span></h1>
          <h2 className="subheading">{text}<Cursor cursorStyle="|" /></h2>
          <p className="description">
            Welcome to LIRO Studios, where creativity seamlessly meets innovation. As a premier design studio, we take pride in our ability to transform visions into captivating visual experiences.
          </p>
          <button className="cta-button">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home_1;
