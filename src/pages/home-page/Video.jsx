import React from "react";

export default function Video({ src }) {
  return (
    <div>
      <video
        className="w-full aspect-fit rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)"
        autoPlay
        muted
        loop
        controls
        src={src}
      />
    </div>
  );
}
