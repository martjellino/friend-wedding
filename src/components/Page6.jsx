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

export const Page6 = () => {
  const wishes = getWishes();
  console.log(wishes);
  return (
    <div className="max-w-3xl m-auto svg-bg-6 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <AddWish />
      <div>
        {wishes.map((item) => (
            <a key={item.id}
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >   
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.wish}
                </p>
            </a>
          ))}
      </div>
    </div>
  );
};
