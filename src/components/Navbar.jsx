import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="p-3">
        <div className="flex max-w-screen-xl mx-auto justify-between items-center">
          {/* Website Name */}
          <Link
            to="/"
            className="font-extrabold text-textColor2 flex justify-center items-start"
          >
            <img className="w-16" src="/src/assets/home-page/brand-img.png" />{" "}
            &nbsp; &nbsp;Luxora <br />
            &nbsp; &nbsp;Living
          </Link>
          {/* navbar menu */}
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl hover:text-textColor2 hover:font-bold ${
                  isActive
                    ? "font-bold text-textColor2"
                    : "font-semibold text-textColor"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/property"
              className={({ isActive }) =>
                `pl-20 text-xl hover:text-textColor2 hover:font-bold ${
                  isActive
                    ? "font-bold text-textColor2"
                    : "font-semibold text-textColor"
                }`
              }
            >
              Property
            </NavLink>

            <NavLink
              to="/agents"
              className={({ isActive }) =>
                `pl-20 text-xl hover:text-textColor2 hover:font-bold ${
                  isActive
                    ? "font-bold text-textColor2"
                    : "font-semibold text-textColor"
                }`
              }
            >
              Agents
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
