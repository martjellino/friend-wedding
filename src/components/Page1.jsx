"use client";
import Image from "next/image";


export const Page1 = () => {
  return (
    <div className="max-w-3xl m-auto svg-bg-1 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <div className="image-center mt-24">
        <Image src="/logo.svg" alt="Your SVG Image" width={100} height={100} />
      </div>
      <div className="mt-1 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-xl font-bold">
        <h1 className="text-xl">You're Invited</h1>
        <h1 className="text-xl">to the Wedding of</h1>
      </div>
      <div className="mt-4 text-6xl font-extrabold">
        <h1 className="">AYU</h1>
        <h1 className="text-2xl">&#183;&#183;&#183; & &#183;&#183;&#183;</h1>
        <h1 className="">RIFQI</h1>
      </div>

      <div className="mt-16 font-bold">
        <h1 className="font-bold">Dear</h1>
        <h1 className="mt-4">OKI AND ERIN</h1>
        <p className="-mt-2 font-extrabold">━━━━━━━━━</p>
      </div>
      <div className="mt-2">
        <button
          type="button"
          className="animate-bounce focus:outline-none text-white bg-mallard-700 hover:bg-mallard-800 focus:ring-4 focus:ring-mallard-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Click to Open Invitation
        </button>
      </div>
    </div>
  );
};
