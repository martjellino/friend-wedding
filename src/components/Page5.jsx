"use client";

export const Page5 = () => {
  return (
    <div className="max-w-3xl m-auto svg-bg-5 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <div>
        <p className="mt-48 font-extrabold text-5xl">Our Event</p>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <div className="col-start-2">
          <a class="block max-w-sm">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              AKAD
            </h5>
            <p class="text-gray-900 text-6xl font-semibold">9:00</p>
            <p class="text-gray-900 text-xl font-semibold">━━</p>
            <p class="text-gray-900 text-6xl font-semibold">10:00</p>
            <p class="text-gray-900 text-xs	font-semibold"><sup>*</sup>Family Only</p>
          </a>
        </div>
        <div className="col-start-3">
          <a class="block max-w-sm">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              RECEPTION
            </h5>
            <p class="text-gray-900 text-6xl font-semibold">11:00</p>
            <p class="text-gray-900 text-xl font-semibold">━━</p>
            <p class="text-gray-900 text-6xl font-semibold">14:00</p>
          </a>
        </div>
      </div>

      <div className="mt-16 font-medium text-center items-center">
        <p>
          <svg
            className="mb-1 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#2b3a1d"
            stroke="#f5d5c7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          LANGIKULA ID
        </p>
      </div>
      <div className="mt-8 justify-center items-center">
        <a href="https://maps.app.goo.gl/4PhvwiDaSQt99rET6" target="_blank">
          <button
            type="button"
            class="focus:outline-none text-white bg-mallard-900 hover:bg-mallard-950 rounded-lg px-5 py-2.5"
          >
            MAP HERE!
          </button>
        </a>
      </div>
    </div>
  );
};
