import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-11 px-3 sm:px-9 ">
      <div
        className="pb-2 flex justify-center
      sm:items-center border-b border-black"
      >
        <Link to="/" className="font-medium text-black">
          L U X O R A L I V I N G
        </Link>
      </div>
    </div>
  );
}
