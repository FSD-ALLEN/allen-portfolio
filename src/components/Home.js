import React from 'react';
import './Home.css'; // Import the CSS file
import allenImage from '../img/allen-portfolio.jpeg'; // Import the image

const Home = () => {
  
  // Function to handle the scroll
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the contact section
  };

  return (
    < section name ="home">
      <div className="home-container">
        {/* Left Column - Text Content */}
        <div className="home-text">
          <h1>Hello, I am Allen K</h1>
          <p>
            <h3>I am a Software Engineer</h3>
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Get in Touch
          </button>
        </div>
        
        {/* Right Column - Image */}
        <div className="home-image">
          <img src={allenImage} alt="Allen" />
        </div>
      </div>
    </section>
  );
};

export default Home;
