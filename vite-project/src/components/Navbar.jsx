import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiGrid } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBrowseJobs, setShowBrowseJobs] = useState(false);
  const [showUsersMenu, setShowUsersMenu] = useState(false);

  const closeMenu = (e) => {
    if (!e.target.closest(".dropdown-menu") && !e.target.closest(".nav-links li")) {
      setShowMenu(false);
    }
    if (!e.target.closest(".browse-jobs-menu") && !e.target.closest(".nav-links li")) {
      setShowBrowseJobs(false);
    }
    if (!e.target.closest(".users-menu") && !e.target.closest(".nav-links li")) {
      setShowUsersMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <nav className="navbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 50px" }}>
      <div className="nav-left" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img src="/logo.png" alt="Freeio" className="logo" />
        <span className="categories">
          <FiGrid className="grid-icon" /> Categories
        </span>
      </div>
      <ul className="nav-links" style={{ display: "flex", gap: "30px", listStyle: "none", margin: "0", padding: "0" }}>
        <li style={{ cursor: "pointer", position: "relative" }} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>Home <span className="dropdown-icon">▼</span>
          {showMenu && (
            <div className="dropdown-menu">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", columnGap: "50px", rowGap: "10px" }}>
                {[...Array(10).keys()].map((i) => (
                  <p key={i} style={{ margin: "0", padding: "10px" }}>Home{i + 1}</p>
                ))}
                {[...Array(10).keys()].map((i) => (
                  <p key={i + 10} style={{ margin: "0", padding: "10px" }}>Home{i + 11}</p>
                ))}
              </div>
            </div>
          )}
        </li>
        <li style={{ cursor: "pointer", position: "relative" }} onMouseEnter={() => setShowBrowseJobs(true)} onMouseLeave={() => setShowBrowseJobs(false)}>Browse Jobs <span className="dropdown-icon">▼</span>
          {showBrowseJobs && (
            <div className="browse-jobs-menu">
              {['Services', 'Projects', 'Jobs'].map((item, index) => (
                <p key={index} style={{ margin: "0", padding: "10px", display: "flex", justifyContent: "space-between" }} onMouseOver={(e) => e.currentTarget.style.color = 'green'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
                  {item} <span>▶</span>
                </p>
              ))}
            </div>
          )}
        </li>
        <li style={{ cursor: "pointer", position: "relative" }} onMouseEnter={() => setShowUsersMenu(true)} onMouseLeave={() => setShowUsersMenu(false)}>Users <span className="dropdown-icon">▼</span>
          {showUsersMenu && (
            <div className="users-menu" style={{ display: "flex", flexDirection: "column" }}>
              {['Freelancers', 'Employers', 'Become Seller'].map((item, index) => (
                <p key={index} style={{ margin: "0", padding: "10px" }} onMouseOver={(e) => e.currentTarget.style.color = 'green'} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
                  {item} <span>▶</span>
                </p>
              ))}
            </div>
          )}
        </li>
        <li style={{ cursor: "pointer" }}>Blog <span className="dropdown-icon">▼</span></li>
        <li style={{ cursor: "pointer" }}>Pages <span className="dropdown-icon">▼</span></li>
      </ul>
      <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <FiSearch className="search-icon" />
        <span className="become-seller">Become a Seller</span>
        <span className="login">Login</span>
        <button className="signup-btn" style={{ backgroundColor: "black", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "5px", transition: "background-color 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "green")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "black")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

