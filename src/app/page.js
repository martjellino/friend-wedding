// "use client"
import { Page1 } from "@/components/Page1";
import { Page2 } from "@/components/Page2";
import { Page3 } from "@/components/Page3";
import { Page4 } from "@/components/Page4";
import { Page5 } from "@/components/Page5";
import { Page6 } from "@/components/Page6";

async function getWishes() {
  const res = await fetch("http://localhost:3000/api/v1/wish", {
    cache: "no-cache",
  });
  const { data } = await res.json();
  console.log(data);
  return data;
}

export default async function Home() {
  const wishes = await getWishes();
  return (
    <div className="">
      {/* <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 /> */}
      <Page6 />
      {/* <div>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {Array.isArray(wishes) && wishes.map((item) => (
            <div key={item.id}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.wish}
              </p>
            </div>
          ))}
        </a>
      </div> */}
    </div>
  );
}
