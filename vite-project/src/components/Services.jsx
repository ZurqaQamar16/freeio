import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Services.css";

const services = [
  {
    id: 1,
    category: "Development & IT",
    title: "Web development, with HTML, CSS, JavaScript and PHP",
    rating: "4.5 (2 Reviews)",
    seller: "Agent Pakulla",
    price: "$69",
    image: "/cover-it.png",
  },
  {
    id: 2,
    category: "Development & IT",
    title: "Flexibility & Customization with CMS vs PHP Framework",
    rating: "5.0 (1 Review)",
    seller: "Thomas Powell",
    price: "$69",
    image: "/cover-it2.png",
  },
  {
    id: 3,
    category: "Design & Creative",
    title: "I will often turn to a PHP framework to compose My code",
    rating: "4.0 (1 Review)",
    seller: "Ali Tufan",
    price: "$68",
    image: "/cover-it3.png",
  },
  {
    id: 4,
    category: "Design & Creative",
    title: "Embedded Android & AOSP customizations on app mobile",
    rating: "4.0 (1 Review)",
    seller: "Robert Fox",
    price: "$59",
    image: "/design-1.png",
  },
  {
    id: 5,
    category: "Design & Creative",
    title: "Developers drop the framework folder into a new parent",
    rating: "4.5 (2 Reviews)",
    seller: "John Powell",
    price: "$128",
    image: "/design-2.png",
  },
  {
    id: 6,
    category: "Design & Creative",
    title: "PHP framework that you can use to create your own custom",
    rating: "4.0 (1 Review)",
    seller: "Ali Tufan",
    price: "$158",
    image: "/design-3.png",
  },
  {
    id: 7,
    category: "Development & IT",
    title: "Management software to help you manage your mobile workers",
    rating: "4.5 (2 Reviews)",
    seller: "Ali Tufan",
    price: "$89",
    image: "/design-4.png",
  },
  {
    id: 8,
    category: "Design & Creative",
    title: "Custom iOS and Android apps development for your project",
    rating: "3.0 (1 Review)",
    seller: "Tom Wilson",
    price: "$85",
    image: "/design-5.png",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
        <h2>Popular Services</h2>
        <a href="#">All Categories →</a>
      </div>
      <p className="services-subtitle">Most viewed and all-time top-selling services</p>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-info">
              <p className="category">{service.category}</p>
              <Link to={`/service/${service.id}`} className="title">
                {service.title}
              </Link>
              <p className="rating">⭐ {service.rating}</p>
              <p className="seller">{service.seller}</p>
              <p className="price">Starting at: {service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
