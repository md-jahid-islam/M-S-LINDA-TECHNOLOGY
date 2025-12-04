import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer";

 const Layouts = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> 
        <Outlet />
        <Footer />

      </div>
    </>
  );
 };

 export default Layouts;
