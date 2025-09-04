import React from "react";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const AuthLayout = ({ children }) => {
  return (
    <html >
      <body>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
};

export default AuthLayout;