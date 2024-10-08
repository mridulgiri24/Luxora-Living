import React from "react";
import agents from "../../data/Agents";

export default function Agents() {
  return (
    <div className="flex justify-evenly items-center  mt-32">
      {agents.map((agent) => (
        <div
          className="w-[25%] flex flex-col justify-center items-center border-x"
          key={agent.id}
        >
          <img className="w-[90%] rounded-2xl m-4 " src={agent.image.Url} />
          <span className="flex justify-center text-2xl font-bold mb-2 text-textColor2">
            {agent.agents}
          </span>
        </div>
      ))}
    </div>
  );
}
