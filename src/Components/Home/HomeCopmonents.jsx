import React from "react";
import { Link } from "react-router-dom";

const HomeCopmonents = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white min-h-screen flex justify-center">
      <div className="container mx-auto px-4 py-24">

        {/* Company Name */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-blue-700 tracking-wide">
          M/S RAHAZAT ZARIF & M/S LINDA TECHNOLOGY
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
          BillChallanHub is your smart, professional, and fast bill & challan management 
          solution — designed to make your business workflow easier, faster, and more efficient.
        </p>

        {/* Feature Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why Choose BillChallanHub?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Create professional challans in seconds",
              "Save client details & auto records",
              "Edit, view, delete & download options",
              "Fully responsive on all devices",
              "Smart & clean dashboard UI",
              "Fast, secure & easy to manage system",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <p className="text-gray-700 text-sm md:text-base">✓ {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center mt-14 gap-4">
          <Link
            to="/CreateChallan"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl text-center 
            text-sm md:text-base font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Create Challan
          </Link>

          <Link
            to="#"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl text-center
            text-sm md:text-base font-semibold hover:bg-blue-50 transition shadow-md"
          >
            View All Challans
          </Link>
        </div>

        {/* Footer small note */}
        <p className="text-center text-gray-500 mt-12 text-xs md:text-sm">
          © 2025 BillChallanHub — Smart Business Management System
        </p>
        
      </div>
    </div>
  );
};

export default HomeCopmonents;
