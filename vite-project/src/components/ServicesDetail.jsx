import React from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web development, with HTML, CSS, JavaScript and PHP",
    description: "This service includes full-stack web development...",
    price: "$69",
  },
  {
    id: 2,
    title: "Flexibility & Customization with CMS vs PHP Framework",
    description: "A deep dive into CMS customization...",
    price: "$69",
  },
  // Add the rest of your services here...
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>Price: {service.price}</p>
    </div>
  );
};

export default ServiceDetail;
