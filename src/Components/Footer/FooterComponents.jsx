import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 

 // ========== Using FaFacebookF for consistency ========= // 
 const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // Updated background and padding for a more premium look
    <footer className="bg-gray-950 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          
          {/* Company Info / Logo Spot (Moved to the left for standard layout) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-teal-400 mb-4 tracking-wider">
              BillChallanHub
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              A smart, fast & professional challan management system, empowering 
              businesses with seamless document organization and financial tracking.
            </p>

            {/* Social Media (Moved here to be near the brand info) */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-teal-500 transition duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-teal-500 transition duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="mailto:jahidulislamwebbd@gmail.com" 
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-teal-500 transition duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-teal-400 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/CreateChallan" 
                  className="text-gray-400 hover:text-teal-400 transition duration-200"
                >
                  Create Challan
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link 
                  to="/Customer" 
                  className="text-gray-400 hover:text-teal-400 transition duration-200"
                >
                  Customer
                </Link>
              </li>
              <li>
                <Link 
                  to="/Settings" 
                  className="text-gray-400 hover:text-teal-400 transition duration-200"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (consolidated and aligned) */}
          <div className="sm:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a 
                    href="tel:+8801540587085" 
                    className="text-gray-400 hover:text-teal-400 transition duration-200"
                  >
                    +880 1540587085
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href="mailto:jahidulislamwebbd@gmail.com" 
                    className="text-gray-400 hover:text-teal-400 transition duration-200"
                  >
                    jahidulislamwebbd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">
                    Uttara, Azampur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line / Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500 text-xs md:text-sm">
            &copy; {currentYear} M/S RAHAZAT ZARIF & M/S LINDA TECHNOLOGY — All Rights Reserved.
          </p>
          <p className="text-center text-gray-600 text-xs mt-1">
             Developed by **BillChallanHub**
          </p>
        </div>
      </div>
    </footer>
  );
 };

 export default Footer;