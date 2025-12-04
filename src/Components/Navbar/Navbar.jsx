import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

 //========== Navbar components ========= // 
 const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // ======== Scroll Animation ========= // 
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setScrolling(true) : setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${scrolling ? "shadow-lg py-2 bg-white/80 backdrop-blur" : "py-4 bg-white"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">

          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-3 ">
            <img src="/images/ms.jpg.png" className="w-10 h-10 rounded-full object-cover"alt="logo"/>
            <h2 className="text-xl font-semibold">M/S LINDA TECHNOLOGY</h2>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/CreateChallan"}>Create Challan & Bill</Link></li>
            <li><Link to={"/AboutUs"}>About Us</Link></li>
            <li><Link to={"/Dashboard"}>Dashboard</Link></li>
            <li><Link to={"/Customer"}>Customer</Link></li>
            <li><Link to={"/Settings"}>Settings</Link></li>
            <li><Link to={"/Invoice"}>Invoice</Link></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to={"/Login"} className="px-4 py-1.5 border rounded-lg hover:bg-gray-100">
              Login
            </Link>
            <Link to={"/Register"} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden flex">
            <button onClick={() => setOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Sidebar Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-[270px] bg-white shadow-xl z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}>

          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>

            {/* Close Button */}
            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* Laptop Menu & Tablet Menu*/}
          <div className="p-4 space-y-4">
            <Link to={"/"} className="block" onClick={() => setOpen(false)}>Home</Link>
            <Link to={"/CreateChallan"} className="block" onClick={() => setOpen(false)}>Create Challan & Bill</Link>
            <Link to={"/AboutUs"} className="block" onClick={() => setOpen(false)}>About Us</Link>
            <Link to={"/Dashboard"} className="block" onClick={() => setOpen(false)}>Dashboard</Link>
            <Link to={"/Customer"} className="block" onClick={() => setOpen(false)}>Customer</Link>
            <Link to={"/Settings"} className="block" onClick={() => setOpen(false)}>Settings</Link>
            <Link to={"/Invoice"} className="block" onClick={() => setOpen(false)}>Invoice</Link>
          
            {/*Login*/}
            <Link to={"/Login"} className="block text-center px-4 py-2 border rounded-lg" onClick={() => setOpen(false)}>
              Login
            </Link>

            {/*Register*/}
            <Link to={"/Register"} className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setOpen(false)}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
 };

 export default Navbar;
