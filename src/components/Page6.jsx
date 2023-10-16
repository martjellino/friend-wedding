"use client";

import { AddWish } from "./AddWish";

async function getWishes() {
  const res = await fetch("http://localhost:3000/api/v1/wish", {
    cache: "no-cache",
  });
  const { data } = await res.json();
  console.log(data);
  return data;
}

export const Page6 = async () => {
  const wishes = await getWishes();
  console.log(wishes);
  return (
    <div className="max-w-3xl m-auto svg-bg-6 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <AddWish />
      <div className="mt-6"></div>
      <div className="max-w-sm space-y-2 overflow-y-auto h-72 block bg-#f5d5c7 border-#f0c4b1 mt-7">
        {wishes.map((item) => (
            <a key={item.id}
              href="#"
              className="block bg-mallard-700 border border-gray-200 rounded-lg"
            >   
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-100">
                  {item.name}
                </h5>
                <p className="font-normal text-pink-100">
                  {item.wish}
                </p>
            </a>
          ))}
      </div>
    </div>
  );
};
