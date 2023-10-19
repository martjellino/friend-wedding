"use client";

import { AddWish } from "./AddWish";

async function getWishes() {
  const res = await fetch("/api/v1/wish", {
    cache: "no-cache",
  });
  const { data } = await res.json();
  //console.log(data);
  return data;
}

export const Page6 = async (props) => {
  console.log(props)
  const { name } = props;
  const wishes = await getWishes();
  // console.log(wishes);
  return (
    <div className="max-w-3xl m-auto svg-bg-6 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <AddWish namewish={name}/>
      <div className="mt-6"></div>
      <div className="max-w-sm space-y-2 overflow-y-auto h-72 block bg-#f5d5c7 border-#f0c4b1 mt-7">
        {wishes.map((item) => (
          <a
            key={item.id}
            className="block bg-mallard-700 border border-mallard-200 rounded-lg"
          >
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-white font-sans text-left ml-3 mr-3 mt-2">
              {item.name}
            </h5>
            <p className="text-sm text-white font-sans text-left ml-3 mr-3 mb-2">
              {item.wish}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
