import React from "react";
import agent1 from "../assets/agent1.jpg";
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/agent3.jpg";
import agent4 from "../assets/agent4.jpg";

export default function Agents() {
  return (
    <div className="mt-12 bg-[#182b17]">
      <div className="flex flex-col sm:flex-row w-full px-5 pt-12 pb-5 sm:px-9 text-white">
        <div className="w-full sm:w-[60%] flex flex-col justify-between">
          <h1 className="text-5xl sm:text-6xl">Meet Our Team</h1>
          <div className="mt-10 sm:mt-0 grid grid-cols-2 gap-12">
            <span>
              <p>Shawn Garcia</p>
              <p>President / Broker</p>
            </span>
            <span>
              <p>Neil Tran</p>
              <p>Real Estate Agent</p>
            </span>
            <span>
              <p>Olivia Wilson</p>
              <p>Real Estate Agent</p>
            </span>
            <span>
              <p>Jon Snow</p>
              <p>Real Estate Agent</p>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full mt-10 sm:mt-0 sm:w-[50%]">
          <img src={agent1} />
          <img src={agent2} />
          <img src={agent3} />
          <img src={agent4} />
        </div>
      </div>
    </div>
  );
}
