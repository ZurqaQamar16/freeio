import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    date: "November 7, 2022",
    title: "New Apartment Nice in the Best Canadian Cities",
    description: "Bringing the culture of sharing to everyone",
    image: "/blog1.png",
  },
  {
    id: 2,
    date: "November 7, 2022",
    title: "Diamond Manor Apartment in the New York and Service",
    description: "Bringing the culture of sharing to everyone",
    image: "/blog2.png",
  },
  {
    id: 3,
    date: "November 7, 2022",
    title: "Unveils the Best Canadian Cities for Biking",
    description: "Bringing the culture of sharing to everyone",
    image: "/blog3.png",
  },
  {
    id: 4,
    date: "November 7, 2022",
    title: "Exploring Some of the Cities and Home Services",
    description: "Bringing the culture of sharing to everyone",
    image: "/blog4.png",
  },
];

export default function BlogSection() {
  return (
    <div style={{ padding: "80px 10%", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#000" }}>Our Blog</h2>
          <p style={{ fontSize: "16px", color: "#777" }}>See how you can up your career status</p>
        </div>
        <a href="#" style={{ fontSize: "14px", fontWeight: "bold", color: "#000", textDecoration: "none" }}>
          All Categories →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 10px rgba(0,0,0,0.1)", overflow: "hidden" }}>
              <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "12px", color: "#888", marginBottom: "10px" }}>{blog.date}</p>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#000", marginBottom: "10px" }}>{blog.title}</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
