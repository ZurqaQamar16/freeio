import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import DownloadApp from "./components/DownloadApp";
import CategoriesSection from "./components/CategorySection";
import SwiperSection from "./components/Swiper"; // Correct import

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <CategoriesSection />
      <SwiperSection />
      <Blogs/>
      <DownloadApp />
      <Footer />
    </div>
  );
}
export default App;

// export default App;
// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import Footer from "./components/Footer";
// import DownloadApp from "./components/DownloadApp";
// import CategoriesSection from "./components/CategorySection";
// import SwiperSection from "./components/Swiper"; // Correct import
// import BlogSection from "./components/Blogs"; // Import BlogSection
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BlogDetail from "./components/BlogDetails"; // Import BlogDetail

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Home Page with all sections */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Services />
//               <CategoriesSection />
//               <SwiperSection />
//               <BlogSection /> {/* Blog Section added here */}
//               <DownloadApp />
//             </>
//           }
//         />
//         {/* Blog Detail Page */}
//         <Route path="/blog/:id" element={<BlogDetails />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
