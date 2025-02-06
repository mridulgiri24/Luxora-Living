import React from "react";
import listing1 from "../assets/listing1.jpg";
import listing2 from "../assets/listing2.jpg";
import listing3 from "../assets/listing3.jpg";

export default function Featured() {
  return (
    <div className="flex flex-col mt-12 px-5 sm:px-9 sm:pb-9">
      <h1 className="text-5xl sm:text-6xl">Recent Listings</h1>
      <div
        className="flex flex-col justify-center items-center
      sm:flex-row sm:justify-end gap-10 mt-10 w-full px-3 sm:px-0"
      >
        <div className="sm:w-[20%]">
          <img className="w-[100%]" src={listing1} />
          <h1 className="mt-2 text-xs">SINGLE DETACHED HOUSE</h1>
          <h2 className="text-lg">123 Beldenwood Avenue</h2>
          <h3 className="text-xs">4 Beds | 3 Baths | 2 Cars</h3>
        </div>
        <div className="sm:w-[20%]">
          <img className="w-[100%]" src={listing2} />
          <h1 className="mt-2 text-xs">TOWNHOUSE</h1>
          <h2 className="text-lg">45 Whelstone Hill</h2>
          <h3 className="text-xs">2 Beds | 2 Baths | 1 Car</h3>
        </div>
        <div className="sm:w-[20%]">
          <img className="w-[100%]" src={listing3} />
          <h1 className="mt-2 text-xs">SINGLE DETACHED HOUSE</h1>
          <h2 className="text-lg">6 Roseltown Drive</h2>
          <h3 className="text-xs">3 Beds | 3 Baths | 2 Cars</h3>
        </div>
      </div>
    </div>
  );
}
