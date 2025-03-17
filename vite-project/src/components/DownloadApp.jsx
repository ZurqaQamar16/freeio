import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="download-content">
        <button className="start-button">Start today</button>
        <h1>Download the App</h1>
        <p>Take classes on the go with the Freeio app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
        <div className="download-buttons">
          <button className="app-store">Download on the Apple Store</button>
          <button className="google-play">Get it on Google Play</button>
        </div>
      </div>
      <div className="download-image">
        <img src="/portfolio.png" alt="Mobile App" className="mobile-image" />
      </div>
    </section>
  );
};

export default DownloadApp;