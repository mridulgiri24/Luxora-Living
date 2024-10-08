import React from "react";

export default function Image({ src, className }) {
  return (
    <>
      <img
        className={`${className} shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}
        src={src}
      />
    </>
  );
}
