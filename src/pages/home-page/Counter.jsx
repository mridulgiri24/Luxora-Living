import React, { useEffect, useState } from "react";

export default function Counter({ targetNumber, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 100); // Calculate the increment value

    const timer = setInterval(() => {
      start += increment;

      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer); //clear the interval once target is reached
      } else {
        setCount(Math.floor(start)); //update state with the current count
      }
    }, 100); //update the count every 100ms

    return () => clearInterval(timer); //cleanup interval on component unmount
  }, [targetNumber, duration]);

  return <>{count}</>;
}
