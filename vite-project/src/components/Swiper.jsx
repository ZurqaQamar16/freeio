// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Swiper.css'; // Ensure you create this CSS file

// const testimonials = [
//   {
//     company: 'Envato',
//     text: 'I have used Freeio numerous times for several different companies. I have always had great experiences. I once tried using someone else and I ended up having to cancel the order and move back to Freeio.',
//     name: 'Courtney Henry',
//     position: 'Product Manager',
//   },
//   {
//     company: 'Themeforest',
//     text: 'Freeio has been a game-changer for our projects. The platform is intuitive, and the quality of freelancers is top-notch.',
//     name: 'Kristin Watson',
//     position: 'Product Manager',
//   },
//   {
//     company: 'Element',
//     text: 'The experience with Freeio has been fantastic. The freelancers are skilled, and the process is seamless.',
//     name: 'Robert Fox',
//     position: 'Nursing Assistant',
//   },
// ];

// const TestimonialSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-content">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="testimonial-item">
//               <p className="testimonial-text">"{testimonial.text}"</p>
//               <h4 className="testimonial-name">{testimonial.name}</h4>
//               <p className="testimonial-position">{testimonial.position}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="testimonial-image">
//         <img src="/img3.png" alt="Testimonial" />
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Courtney Henry",
    position: "Product Manager",
    company: "Envato",
    quote:
      "I have used Freeio numerous times for several different companies. I have always had great experiences. I once tried using someone else and I ended up having to cancel the order and move back to Freeio.",
  },
  {
    name: "Robert Fox",
    position: "Nursing Assistant",
    company: "Element",
    quote:
      "The experience with Freeio has been fantastic. The freelancers are skilled, and the process is seamless.",
  },
  {
    name: "Sarah Wilson",
    position: "Marketing Specialist",
    company: "Upwork",
    quote:
      "Freelancers on Freeio exceeded my expectations. Their professionalism and dedication made our project a success.",
  },
];

export default function Testimonials() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 10%",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      {/* Swiper (Left Side) */}
      <div style={{ width: "50%", paddingRight: "50px" }}>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div>
                <h2 style={{ color: "#28A745", fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>
                  {testimonial.company}
                </h2>
                <p style={{ fontSize: "20px", color: "#333", lineHeight: "1.6", fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ marginTop: "20px" }}>
                  <p style={{ fontWeight: "bold", fontSize: "18px", color: "#000" }}>{testimonial.name}</p>
                  <p style={{ fontSize: "14px", color: "#777" }}>{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fixed Image (Right Side) */}
      <div style={{ width: "50%", display: "flex", justifyContent: "flex-end", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "0",
            width: "200px",
            height: "200px",
            backgroundColor: "#E8F5E9",
            borderRadius: "10px",
            zIndex: "-1",
          }}
        ></div>
        <img
          src="/img3.png"
          alt="Testimonial"
          style={{
            width: "420px",
            height: "500px",
            borderRadius: "10px",
            objectFit: "cover",
            border: "4px solid #fff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
}
