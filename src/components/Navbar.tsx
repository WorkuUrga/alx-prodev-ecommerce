import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: "#b8860b" }}
      className="bg-gold-500 text-white p-4 flex justify-between items-center border-b border-gray-300"
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">Golden Store</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex">
        {/* Navigation Links (Hidden on mobile, visible on large screens) */}
        <div>
          <ul
            className={`flex space-x-6 lg:flex ${
              isMenuOpen ? "flex-col" : "hidden"
            } lg:flex-row`}
          >
            <li>
              <Link to="/" className="hover:text-gray-300 pl-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-300 pr-4">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
