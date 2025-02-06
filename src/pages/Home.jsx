import React from "react";
import hero_img from "../assets/hero_img.jpg";
import Agents from "../components/Agents";
import Featured from "../components/Featured";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <div className="px-5 sm:px-9 mt-12">
        <div className="flex flex-row-reverse">
          <div className="sm:px-9 sm:mr-32">
            <h1 className="text-6xl mb-3">
              Looking to buy or
              <br /> sell your property?
            </h1>
            <h3 className="text-3xl mb-3">You've come to the right place.</h3>
          </div>
        </div>
        <img className="w-full" src={hero_img} />
      </div>
      <Agents />
      <Featured />
      <Reviews />
    </>
  );
}
