import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import MobileNav from "./MovileNav";

function Nav() {
    const [caret, setCaret] = useState(true);
  return (
    <div>
      <div className="z-50 w-full bg-pink flex flex-col items-center justify-center">
        <div className="hidden md:block w-full h-5 bg-pink">    
        </div>
        <div className="hidden sm:flex rounded-t-lg w-full md:w-1/2 p-10 bg-orange items-center justify-center gap-10 text-md">
          <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/" onClick={() => setCaret(!caret)}> Home </Link>
          <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/"> ToS </Link>
          <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Link to="/" className="hidden lg:flex text-xl font-bold"> Logo </Link>
          </motion.div>
          <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/"> Gallery </Link>
          <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/"> Contact </Link>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default Nav;
