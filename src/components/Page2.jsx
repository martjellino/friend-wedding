"use client";
import Image from 'next/image';

export const Page2 = () => {
  return (
    <div className="max-w-3xl m-auto svg-bg-2 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <div className='mt-8 font-semibold'>
        <p>THE WEEDDING OF </p>
      </div>
      <div className="mt-[26rem] text-7xl font-extrabold">
        <h1 className="">AYU</h1>
        <h1 className="text-2xl">&#183;&#183;&#183; & &#183;&#183;&#183;</h1>
        <h1 className="">RIFQI</h1>
      </div>
      <div className="mt-2 text-sm font-extrabold">
      <p>Sunday, 18 November 2023</p>
      </div>
      <div className='image-center font-color'>
        <Image
          src="/chevrons.png"
          alt="Your SVG Image"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
