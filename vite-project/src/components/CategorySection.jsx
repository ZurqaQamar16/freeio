import React from "react";
import "./CategorySection.css";
import {
  FaLaptopCode, FaPalette, FaBullhorn, FaFileAlt,
  FaMicrophone, FaFilm, FaCode, FaChartBar
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Development & IT", services: 8, icon: <FaLaptopCode className="icon" /> },
  { id: 2, name: "Design & Creative", services: 8, icon: <FaPalette className="icon" /> },
  { id: 3, name: "Digital Marketing", services: 1, icon: <FaBullhorn className="icon" /> },
  { id: 4, name: "Writing & Translation", services: 1, icon: <FaFileAlt className="icon" /> },
  { id: 5, name: "Music & Audio", services: 0, icon: <FaMicrophone className="icon" /> },
  { id: 6, name: "Video & Animation", services: 0, icon: <FaFilm className="icon" /> },
  { id: 7, name: "Programming & Tech", services: 1, icon: <FaCode className="icon" /> },
  { id: 8, name: "Finance & Accounting", services: 4, icon: <FaChartBar className="icon" /> },
];

const CategoriesSection = () => {
  const handleCategoryClick = (categoryName) => {
    window.location.href = `/${categoryName.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`;
  };

  return (
    <section className="categories-section">
      {/* Header */}
      <div className="categories-header">
        <div>
          <h2>Browse talent by category</h2>
          <p>Get some inspirations from 1800+ skills</p>
        </div>
        <a href="#">All Categories →</a>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            {category.icon}
            <p>{category.services} {category.services === 1 ? "Service" : "Services"}</p>
            <h3 onClick={() => handleCategoryClick(category.name)}>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
