import React from "react";
import Navbar from "/src/components/Navbar"; // Correct relative path
import Footer from "/src/components/Footer"; // Correct relative path

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
