// "use client"
import { Page2 } from "@/components/Page2";
import { Page3 } from "@/components/Page3";
import { Page4 } from "@/components/Page4";
import { Page5 } from "@/components/Page5";
import { Page6 } from "@/components/Page6";
import { Page7 } from "@/components/Page7";
import { apiUrl } from "@/config/apiUrl";
import Image from "next/image";


async function getVisitorById(id) {
  const res = await fetch(`${apiUrl}/api/v1/visitor/${id}`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

async function getWishes() {
  const res = await fetch(`${apiUrl}/api/v1/wish`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

export default async function Home({ searchParams }) {
  let theVisitor;
  let name = "Tidak diundang";
  const { id } = searchParams;
  if (id) {
    theVisitor = await getVisitorById(id);
    const { name: GuestName } = theVisitor;
    name = GuestName;
  }
  const wishes = await getWishes();

  return (
    <div className="-space-y-4">
      <div className="w-full bg-image-1 bg-center bg-cover h-screen text-center font-color font-bell">
        <div className="h-full flex flex-col justify-center items-center">
          <div>
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
            <h1 className="mt-4">{name}</h1>
            <p className="-mt-2 font-extrabold">━━━━━━━━━</p>
          </div>
          <div className="mt-2">
            <button type="button" className="tailwind-style px-5 py-2.5 rounded-full">
              Scroll to see invitation<span className="shine"></span>
            </button>
          </div>
          <div className="image-center mt-8">
          <Image src="/chevron.svg" alt="Your SVG Image" width={30} height={30} className={`animate-bounce`} />
        </div>
        </div>
      </div>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page7 />
      <Page6 name={name} wishes={wishes} />
    </div>
  );
}
