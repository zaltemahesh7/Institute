import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" z-40 grid sm:grid-cols-3 h-20 sticky top-0 items-center text-white text-xl md:px-7 bg-[#7633fc]">
      <div className="flex items-center justify-center">
        <img
          src="logo.jpg"
          alt="Logo"
          width={"50px"}
          className=" border rounded-full bg-transparent"
        />
        <h1 className=" col items-end pl-16">Sai Dhawanwantari</h1>
      </div>

      <ul className="flex col-span-2 justify-around">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/offerings"}>Offerings</Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About Us</Link>
        </li>
        <li>
          <Link to={"/careers"}>Careers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
