import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <footer style={{ padding: '50px 20px', backgroundColor: '#fff', borderTop: '1px solid #ddd', fontSize: '14px', color: '#000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
        
        {/* Top Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
          <div>
            <a href="#" style={{ marginRight: '20px', textDecoration: 'none', color: '#000' }}>Terms of Service</a>
            <a href="#" style={{ marginRight: '20px', textDecoration: 'none', color: '#000' }}>Privacy Policy</a>
            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Site Map</a>
          </div>
          <div>
            <span style={{ marginRight: '10px' }}>Follow Us</span>
            <FaFacebookF style={{ marginRight: '10px', fontSize: '20px', cursor: 'pointer' }} />
            <FaTwitter style={{ marginRight: '10px', fontSize: '20px', cursor: 'pointer' }} />
            <FaInstagram style={{ marginRight: '10px', fontSize: '20px', cursor: 'pointer' }} />
            <FaLinkedin style={{ fontSize: '20px', cursor: 'pointer' }} />
          </div>
        </div>
        
        {/* Footer Sections */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
          <div>
            <h4>About</h4>
            <p>About Us</p>
            <p>Become Seller</p>
            <p>Jobs on Freeio</p>
            <p>Pricing</p>
            <p>Services Freeio</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h4>Categories</h4>
            <p>Design & Creative</p>
            <p>Development & IT</p>
            <p>Music & Audio</p>
            <p>Programming & Tech</p>
            <p>Digital Marketing</p>
            <p>Finance & Accounting</p>
            <p>Writing & Translation</p>
            <p>Trending</p>
            <p>Lifestyle</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help & Support</p>
            <p>FAQ Freeio</p>
            <p>Contact Us</p>
            <p>Services</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h4>Subscribe</h4>
            <input type="email" placeholder="Your email address" style={{ padding: '8px', width: '200px', marginRight: '10px' }} />
            <button style={{ padding: '8px 15px', cursor: 'pointer' }}>Send</button>
            <h4>Apps</h4>
            <p><FaApple /> iOS App</p>
            <p><FaGooglePlay /> Android App</p>
          </div>
        </div>

        {/* Grey Line */}
        <div style={{ borderTop: '1px solid #ddd', marginTop: '30px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '12px', color: '#555' }}>
            © Freeio. 2022 CreativeLayers. All rights reserved.
          </div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              onClick={() => setShowLanguages(!showLanguages)} 
              style={{ padding: '10px 15px', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', borderRadius: '5px', position: 'relative', fontSize: '14px' }}>
              English ▾
            </button>
            {showLanguages && (
              <div style={{ 
                position: 'absolute', 
                backgroundColor: '#fff', 
                border: '1px solid #ddd', 
                padding: '10px', 
                borderRadius: '5px', 
                top: '100%', 
                left: '0', 
                marginTop: '5px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{ margin: '5px 0', cursor: 'pointer' }}>Deutsch</p>
                <p style={{ margin: '5px 0', cursor: 'pointer' }}>Italia</p>
                <p style={{ margin: '5px 0', cursor: 'pointer' }}>French</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
