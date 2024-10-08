import React from "react";
import propertyDetails from "../../data/Property";

export default function Featured() {
  const resident = propertyDetails.filter(
    (property) => property.type === "Resident Property"
  );

  const commercial = propertyDetails.filter(
    (property) => property.type === "Commercial Property"
  );

  const industrial = propertyDetails.filter(
    (property) => property.type === "Industrial Property"
  );

  const agriculture = propertyDetails.filter(
    (property) => property.type === "Agriculture Property"
  );

  return (
    <div className="mt-28">
      <div className="mx-5 text-center border-y">
        <span className="text-3xl font-bold">Featured Properties</span>
      </div>

      <div className="w-full flex justify-evenly items-center">
        {/* property */}
        {commercial.slice(0, 1).map((properties) => (
          <div
            className="bg-[#F5EEE6] h-[370px] rounded-xl w-[30%] m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={properties.id}
          >
            {/* property img  */}
            <img className="rounded-t-xl w-full" src={properties.image.Url} />
            {/* property type */}
            <h3 className="p-4 pt-3 font-semibold text-xl">
              <i className="fa-solid fa-house-user"></i> &nbsp;
              {properties.type}
            </h3>
            {/* property price */}
            <span className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-sack-dollar"></i> &nbsp;$
              {properties.price.toLocaleString()}
            </span>
            {/* property city */}
            <span className="font-semibold text-xl">
              <i className="fa-solid fa-location-pin"></i> {properties.city}
            </span>
            {/* property agents */}
            <h3 className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-user"></i> &nbsp;
              {properties.agents}
            </h3>
          </div>
        ))}

        {agriculture.slice(0, 1).map((properties) => (
          <div
            className="bg-[#F5EEE6] h-[370px] rounded-xl w-[30%] m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={properties.id}
          >
            {/* property img  */}
            <img className="rounded-t-xl w-full" src={properties.image.Url} />
            {/* property type */}
            <h3 className="p-4 pt-3 font-semibold text-xl">
              <i className="fa-solid fa-house-user"></i> &nbsp;
              {properties.type}
            </h3>
            {/* property price */}
            <span className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-sack-dollar"></i> &nbsp;$
              {properties.price.toLocaleString()}
            </span>
            {/* property city */}
            <span className="font-semibold text-xl">
              <i className="fa-solid fa-location-pin"></i> {properties.city}
            </span>
            {/* property agents */}
            <h3 className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-user"></i> &nbsp;
              {properties.agents}
            </h3>
          </div>
        ))}

        {resident.slice(0, 1).map((properties) => (
          <div
            className="bg-[#F5EEE6] h-[370px] rounded-xl w-[30%] m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={properties.id}
          >
            {/* property img  */}
            <img className="rounded-t-xl w-full" src={properties.image.Url} />
            {/* property type */}
            <h3 className="p-4 pt-3 font-semibold text-xl">
              <i className="fa-solid fa-house-user"></i> &nbsp;
              {properties.type}
            </h3>
            {/* property price */}
            <span className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-sack-dollar"></i> &nbsp;$
              {properties.price.toLocaleString()}
            </span>
            {/* property city */}
            <span className="font-semibold text-xl">
              <i className="fa-solid fa-location-pin"></i> {properties.city}
            </span>
            {/* property agents */}
            <h3 className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-user"></i> &nbsp;
              {properties.agents}
            </h3>
          </div>
        ))}

        {industrial.slice(0, 1).map((properties) => (
          <div
            className="bg-[#F5EEE6] h-[370px] rounded-xl w-[30%] m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            key={properties.id}
          >
            {/* property img  */}
            <img className="rounded-t-xl w-full" src={properties.image.Url} />
            {/* property type */}
            <h3 className="p-4 pt-3 font-semibold text-xl">
              <i className="fa-solid fa-house-user"></i> &nbsp;
              {properties.type}
            </h3>
            {/* property price */}
            <span className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-sack-dollar"></i> &nbsp;$
              {properties.price.toLocaleString()}
            </span>
            {/* property city */}
            <span className="font-semibold text-xl">
              <i className="fa-solid fa-location-pin"></i> {properties.city}
            </span>
            {/* property agents */}
            <h3 className="p-4 font-semibold text-xl">
              <i className="fa-solid fa-user"></i> &nbsp;
              {properties.agents}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
