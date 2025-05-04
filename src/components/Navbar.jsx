import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: isActive ? 1 : 0.9, y: isActive ? 0 : -10 });
  }, [isActive, controls]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-20 transition-all px-4 lg:px-8 ${
        isActive ? "bg-white py-3 shadow-md" : "bg-transparent py-5"
      }`}
      animate={controls}
      initial={{ opacity: 0.9, y: -10 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-sky-600"
            viewBox="0 0 24 24"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
          </svg>
          <span className="font-bold text-lg text-gray-800">EmacoreCart</span>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hover:scale-105 transition-transform"
          >
            <BsBag className="text-2xl text-gray-700" />
            {itemAmount > 0 && (
              <motion.div
                className="absolute -right-2 -bottom-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {itemAmount}
              </motion.div>
            )}
          </div>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <Link to="/profile">
              <motion.img
                src={user.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-sky-500"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ) : (
            <motion.button
              onClick={() => loginWithRedirect()}
              className="bg-sky-600 text-white px-4 py-1.5 rounded-md font-medium hover:bg-sky-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
