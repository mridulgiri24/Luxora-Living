import React from "react";
import footer1 from "../assets/footer1.jpg";

export default function Footer() {
  return (
    <div className="flex flex-col p-5 mt-12 sm:p-9">
      <h1 className="text-5xl sm:text-6xl">Do you have questions?</h1>
      <h2 className="text-3xl sm:text-4xl mt-5">Contact Us</h2>
      <div className="flex flex-col sm:flex-row mt-10">
        <img className="w-full sm:w-[40%]" src={footer1} />
        <div className="flex flex-col justify-center gap-5 mt-10 sm:mt-0 sm:ml-10 text-xl">
          <p className="font-medium text-2xl">
            "Our vision is to be the most trusted and respected real estate
            agency in Whelton."
          </p>
          <h1>
            Phone: <br />
            (123) 456-7890
          </h1>
          <h2>
            Email: <br /> luxoraliving@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
}
