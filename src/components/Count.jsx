"use client";

import { useEffect, useState } from "react";

export const Count = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let countDownDate = new Date("Nov 19, 2023 11:00:00").getTime();
    const updateCountdown = () => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    };

    updateCountdown(); // Initialize the countdown

    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="max-w-5xl space-x-2 mx-auto flex justify-center items-center">
      <a
        className="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center  col-start-2"
      >
        <div className="flex-row">
        <p className="text-5xl font-semibold tracking-tight text-white font-mono">{days}</p>
        <p className="font-normal text-white">Days</p>
        </div>
      </a>
      <a
        className="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
          <p className="text-5xl font-extrabold tracking-tight text-white font-mono">
          {hours}
          </p>  
          <p className="font-normal text-white ">Hours</p>
        </div>
      </a>
      <a
        className="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
        <p className="text-5xl font-extrabold tracking-tight text-white font-mono">{minutes}</p>
        <p className="font-normal text-white">Minutes</p>
        </div>
      </a>
      <a
        class="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
        <p className="text-5xl font-extrabold tracking-tight text-white font-mono">{seconds}</p>
        <p className="font-normal text-white">Seconds</p>
        </div>
      </a>

    </div>
  );
};
