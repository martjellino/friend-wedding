"use client";
import Image from "next/image";
import { Count } from "./Count";

export const Page4 = () => {
  return (
    <div className="w-full bg-image-4 bg-cover bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <div className="mt-16">
        <p className="text-6xl font-extrabold">SUNDAY</p>
      </div>
      <div>
        <p className="text-xl font-semibold">
          19<sup>th</sup> November 2023
        </p>
      </div>
      <div className="mt-6 leading-5">
        <p>We are so excited to celebrate</p>
        <p>our special day with our family</p>
        <p>and friends</p>
      </div>
      <div className="mt-4 leading-5">
        <p>Thank you so much for visiting our</p>
        <p>wedding website! just some hours</p>
        <p>until we get married!</p>
      </div>
      <div className="image-center mt-2">
        <Image src="/logo.svg" alt="Your SVG Image" width={100} height={100} />
      </div>
      <div className="mt-4">
        <Count />
      </div>

      <div className="mt-16">
        <a
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Njl2aHNpZDcxMzE5bm50cWh1ZzlvazBpMTQgbXIubWFyY2VsbGlubzE0QG0&tmsrc=mr.marcellino14%40gmail.com"
          target="_blank"
        >
          <button type="button" class="focus:outline-none text-white bg-mallard-900 hover:bg-mallard-950 rounded-lg px-5 py-2.5 mr-2 mb-2">
            SAVE THE DATE
          </button>
        </a>
      </div>
    </div>
  );
};
