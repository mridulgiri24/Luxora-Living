import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-evenly items-center p-10 text-white bg-textColor1 mt-44 border-white">
        <div className="w-full p-10 border-r border-white">
          <Link to="/" className="font-extrabold flex  items-start mb-6">
            <img className="w-20" src="/src/assets/home-page/brand-img.png" />{" "}
            &nbsp; &nbsp;Luxora <br />
            &nbsp; &nbsp;Living
          </Link>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          laudantium voluptate optio eaque esse, rem ipsum dolor, quod
          blanditiis quaerat magnam temporibus inventore aliquid veniam laborum
          hic, sint laboriosam accusamus? <br />
          <br />
          <span className="text-xl font-medium">+(123) 456-7890</span>
        </div>
        <div className="w-full p-10">
          <span className="mx-4 font-semibold text-xl">Follow Us:</span>
          <br />
          <br />
          <i className="fa-brands fa-instagram mx-4 text-3xl cursor-pointer"></i>
          <i className="fa-brands fa-facebook mx-4 text-3xl cursor-pointer"></i>
          <i className="fa-brands fa-square-x-twitter mx-4 text-3xl cursor-pointer"></i>
          <i className="fa-brands fa-youtube mx-4 text-3xl cursor-pointer"></i>
        </div>
      </div>

      {/* Developed by Mridul Giri */}
      <div className="font-semibold text-xl text-center p-6  text-white bg-textColor1">
        Developed By: Mridul Giri &rarr;
        <a href="https://www.linkedin.com/in/mridul-giri/" target="_blank">
          <i className="fa-brands fa-linkedin-in ml-4"></i>{" "}
        </a>
        <a
          href="https://x.com/_thmridul?t=jTcTgR1R_qtAAnhQatB7oA&s=08"
          target="_blank"
        >
          <i className="fa-brands fa-square-x-twitter ml-1"></i>
        </a>
      </div>
    </div>
  );
}
