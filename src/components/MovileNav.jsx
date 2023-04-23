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
                    className="sm:hidden z-50 absolute bg-orange p-5 pt-2 h-screen w-1/2"
                >
                    <div className="">
                        <p>ART</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}

export default MobileNav;