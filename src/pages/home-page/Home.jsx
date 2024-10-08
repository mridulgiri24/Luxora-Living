import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import Video from "./Video";
import Counter from "./Counter";
import Featured from "./Featured";
import Agents from "../agent-page/Agents";

export default function Home() {
  return (
    <>
      <main>
        <div className="mt-24 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-extrabold w-1/2  text-center">
            Find Your Dream Home, Effortlessly.
          </h1>
          <br />
          <p className="w-1/2 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            quidem, quasi cumque eligendi doloribus optio blanditiis ratione.
            Distinctio doloremque dolorum incidunt quod nihil repellat,
            dignissimos id quos ea veritatis blanditiis?
          </p>

          {/* Image section */}
          <div className="flex mt-10 flex-wrap justify-center">
            <Image
              className="w-2/5 m-4 rounded-xl"
              src="/src/assets/home-page/main-img1.jpg"
            />
            <Image
              className="w-1/2 m-4 rounded-xl"
              src="/src/assets/home-page/main-img2.jpg"
            />
            <Image
              className="w-1/2 m-4 rounded-xl"
              src="/src/assets/home-page/main-img3.jpg"
            />
            <Image
              className="w-2/5 m-4 rounded-xl"
              src="/src/assets/home-page/main-img4.jpg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-24">
          <div className="bg-background2 w-[30%] p-14 m-10 rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <h1 className="text-3xl font-extrabold">
              Your Dream Home, Just a Few Clicks Away.
            </h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <Link
              to="/property"
              className="bg-textColor2 text-white py-2 px-3 rounded-lg"
            >
              Get Started
            </Link>
          </div>

          {/* video section  */}
          <div className="w-[70%] m-10">
            <Video src="/src/assets/home-page/main-video1.mp4" />
          </div>
        </div>

        {/* counter section */}
        <div className="flex justify-evenly items-center mt-24 bg-background2 p-10">
          <div className="p-1">
            <i className="fa-solid fa-sack-dollar text-5xl"></i>
            <br />
            <br />
            <span className="font-extrabold text-5xl">
              $<Counter targetNumber={15.4} />M
            </span>
            <br />
            <br />
            <span className="font-semibold text-xl text-[#355764]">
              Owned from <br /> Properties transactions
            </span>
          </div>
          <div className="p-1">
            <i className="fa-solid fa-hand-peace text-5xl"></i>
            <br />
            <br />
            <span className="font-extrabold text-5xl">
              <Counter targetNumber={25} />
              K+
            </span>
            <br />
            <br />
            <span className="font-semibold text-xl text-[#355764]">
              Properties for Buy & sell <br /> Successfully
            </span>
          </div>
          <div className="w-[200px] p-1">
            <i className="fa-solid fa-face-smile-wink text-5xl"></i>
            <br />
            <br />
            <span className="font-extrabold text-5xl">
              <Counter targetNumber={600} />+
            </span>
            <br />
            <br />
            <span className="font-semibold text-xl text-[#355764]">
              Reagular Clients
            </span>
          </div>
        </div>

        {/* Featured section */}
        <Featured />

        <div className="mt-40 flex flex-col justify-center items-center bg-background2 p-10">
          <div className="m-4">
            <Video src="/src/assets/home-page/main-video2.mp4" />
          </div>
          <div className="p-4">
            <p className="font-medium text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              natus, consectetur minus nihil illo ad dolorem labore perferendis
              saepe nulla harum, tempora optio amet numquam commodi repudiandae
              dolorum illum veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente natus, consectetur minus nihil illo ad
              dolorem labore perferendis saepe nulla harum, tempora optio amet
              numquam commodi repudiandae dolorum illum veniam. dolorum illum
              veniam. dolorum illum veniam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sapiente natus, consectetur minus
              nihil illo ad dolorem labore perferendis saepe nulla harum,
              tempora optio amet numquam commodi repudiandae dolorum illum
              veniam. dolorum illum veniam.
            </p>
          </div>
          <i className="fa-solid fa-heart text-center text-xl"></i>
        </div>
      </main>
    </>
  );
}
