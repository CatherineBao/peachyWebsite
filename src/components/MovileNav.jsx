import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MobileNav() {
    const [menu, setMenu] = useState(true);
  return (
    <div className="z-50 fixed w-full">
        <div className="sm:hidden flex w-full h-full bg-orange items-end justify-start">
            <div className="p-5">
                <FontAwesomeIcon  onClick={() => setMenu(s => !s)} className="hover:cursor-pointer text-black" icon={faBars}/>
            </div>
        </div>
        <AnimatePresence>
            {menu && (
                <motion.div
                    key="nav"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "-50%", transition: { duration: "0.35" } }}
                    transition={{ stiffness: "100", duration: "0.55" }}
                    className="flex"
                >
                        <div className="flex flex-col gap-8 sm:hidden z-50 bg-orange p-5 pt-2 h-screen w-1/2">
                            <Link className="mt-10 hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/">Home</Link>
                            <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/">ToS</Link>
                            <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/">Gallery</Link>
                            <Link className="hover:animate-pulse hover:scale-105 hover:text-red transition duration-200 ease-in-out" to="/">Contact</Link>
                        </div>
                        <div onClick={() => setMenu(s => !s)} className="sm:hidden p-5 pt-2 h-screen w-1/2">
                        </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}

export default MobileNav;