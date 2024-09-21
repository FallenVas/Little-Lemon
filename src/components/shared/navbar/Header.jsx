import React, { useState } from "react";
import logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return ( 
    <header className="my-5 ">
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden  md:flex justify-center gap-10 items-center">
          <li>
            <Link to="/" className="text-xl hover:text-secondary transition-all">
              Home
            </Link>
          </li>
          <li>
            <a
              href="/#aboutus"
              className="text-xl hover:text-secondary transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#menu"
              className="text-xl hover:text-secondary transition-all"
            >
              Menu
            </a>
          </li>
          <li>
            <Link
              to="/reservation"
              className="text-xl hover:text-secondary transition-all"
            >
              Reservations
            </Link>
          </li>
          <li>
            <p className="text-xl hover:text-secondary transition-all">
              Order Online
            </p>
          </li>
          <li>
            <p className="text-xl hover:text-secondary transition-all">Login</p>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute z-50 top-16 left-0 w-full bg-white flex flex-col items-center space-y-6 py-4 shadow-md md:hidden">
            <li>
              <Link
                to="/"
                className="text-xl hover:text-secondary transition-all"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#aboutus"
                className="text-xl hover:text-secondary transition-all"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#menu"
                className="text-xl hover:text-secondary transition-all"
                onClick={toggleMenu}
              >
                Menu
              </a>
            </li>
            <li>
              <Link
                to="/reservation"
                className="text-xl hover:text-secondary transition-all"
                onClick={toggleMenu}
              >
                Reservations
              </Link>
            </li>
            <li>
              <p className="text-xl hover:text-secondary transition-all">
                Order Online
              </p>
            </li>
            <li>
              <p className="text-xl hover:text-secondary transition-all">
                Login
              </p>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
