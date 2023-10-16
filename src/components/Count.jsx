"use client";

export const Count = () => {
  return (
    <div class="max-w-5xl space-x-2 mx-auto flex justify-center items-center">
      <a
        href="#"
        class="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center  col-start-2"
      >
        <div className="flex-row">
        <p className="text-5xl font-extrabold tracking-tight text-white">99</p>
        <p class="font-normal text-white">Days</p>
        </div>
      </a>
      <a
        href="#"
        class="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
          <p className="text-5xl font-extrabold tracking-tight text-white">
            99
          </p>  
          <p class="font-normal text-white ">Hours</p>
        </div>
      </a>
      <a
        href="#"
        class="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
        <p className="text-5xl font-extrabold tracking-tight text-white">99</p>
        <p class="font-normal text-white">Minutes</p>
        </div>
      </a>
      <a
        href="#"
        class="flex w-20 p-2 bg-mallard-900 border rounded-lg shadow justify-center items-center"
      >
        <div className="flex-row">
        <p className="text-5xl font-extrabold tracking-tight text-white">99</p>
        <p class="font-normal text-white">Seconds</p>
        </div>
      </a>

    </div>
  );
};
