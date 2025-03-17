import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    date: "November 7, 2022",
    title: "New Apartment Nice in the Best Canadian Cities",
    content: "This is the full content for the first blog...",
    image: "/blog1.png",
  },
  {
    id: 2,
    date: "November 7, 2022",
    title: "Diamond Manor Apartment in the New York and Service",
    content: "This is the full content for the second blog...",
    image: "/blog2.png",
  },
  {
    id: 3,
    date: "November 7, 2022",
    title: "Unveils the Best Canadian Cities for Biking",
    content: "This is the full content for the third blog...",
    image: "/blog3.png",
  },
  {
    id: 4,
    date: "November 7, 2022",
    title: "Exploring Some of the Cities and Home Services",
    content: "This is the full content for the fourth blog...",
    image: "/blog4.png",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <div style={{ padding: "50px 10%", backgroundColor: "#fff" }}>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
      <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#000", marginBottom: "10px" }}>{blog.title}</h1>
      <p style={{ fontSize: "14px", color: "#888", marginBottom: "20px" }}>{blog.date}</p>
      <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>{blog.content}</p>
    </div>
  );
}
