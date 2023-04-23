import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const [caret, setCaret] = useState(true);
  return (
    <div className="w-full bg-pink flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center rounded-b-lg md:w-1/2 p-10 bg-orange">
        <div className="flex flex-col">
            <div className='flex items-center justify-center gap-16 h-14 mb-8'>
                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/49/49323.png"/>
                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
                <img className="w-5 h-5" src="https://cdn.iconscout.com/icon/free/png-256/deviantart-2749252-2284642.png"/>
             </div>
            <div className="flex items-center justify-center gap-10 text-sm">   
                <Link to="/" onClick={() => setCaret(!caret)}> Home </Link>
                <Link to="/"> ToS </Link>
                <Link to="/" className="hidden lg:flex text-xl font-bold"> Logo </Link>
                <Link to="/"> Gallery </Link>
                <Link to="/"> Contact </Link>  
            </div>
        </div>
      </div>
      <div className="hidden md:block w-full h-5 bg-pink">    
        </div>
    </div>
  );
}

export default Footer;
