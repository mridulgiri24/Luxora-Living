import React from "react";
import Map from "./Map";
import propertyDetails from "../../data/Property";

export default function Property() {
  return (
    <>
      <Map />
      <div className="flex flex-wrap items-center justify-center mt-28 ">
        {propertyDetails.map((property) => (
          <div
            className="bg-[#F5EEE6] h-[450px] rounded-xl w-[30%] m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={property.id}
          >
            {/* property img  */}
            <img className="rounded-t-xl w-full" src={property.image.Url} />
            {/* property type */}
            <h3 className="p-4 pt-3 font-semibold text-xl">
              <i className="fa-solid fa-house-user"></i> &nbsp;
              {property.type}
            </h3>
            {/* property price */}
            <span className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-sack-dollar"></i> &nbsp;$
              {property.price.toLocaleString()}
            </span>
            {/* property city */}
            <span className="font-semibold text-xl">
              <i className="fa-solid fa-location-pin"></i> {property.city}
            </span>
            {/* property agents */}
            <h3 className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-user"></i> &nbsp;
              {property.agents}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
