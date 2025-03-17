import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/hero-image1.png",
    "/img2.png",
    "/img3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      padding: "40px", 
      backgroundColor: "#f8f9fa" 
    }}>
      
      {/* Left Content */}
      <div style={{ width: "50%" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>
          Hire the best freelancers for any job, online.
        </h1>
        <p style={{ fontSize: "18px", color: "black", marginBottom: "20px" }}>
          Millions of people use freeio.com to turn their ideas into reality.
        </p>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            style={{ padding: "10px", flex: 1, border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <button style={{ 
            padding: "10px 20px", 
            marginLeft: "10px", 
            backgroundColor: "black", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}>
            Search
          </button>
        </div>

        {/* Trusted By Logos */}
        <div style={{ display: "flex", gap: "20px" }}>
          <img src="/amazon.png" alt="Amazon" style={{ width: "80px" }} />
          <img src="/amd.png" alt="AMD" style={{ width: "80px" }} />
          <img src="/logitech.png" alt="Logitech" style={{ width: "80px" }} />
          <img src="/spotify.png" alt="Spotify" style={{ width: "80px" }} />
        </div>
      </div>

      {/* Right - Image Slider */}
      <div style={{ width: "45%", textAlign: "center" }}>
        <img 
          src={images[currentImage]} 
          alt="Hero Slider" 
          style={{ width: "100%", borderRadius: "10px", transition: "opacity 0.5s ease-in-out" }} 
        />
      </div>

    </div>
  );
};

export default HeroSection;
