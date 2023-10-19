"use client";

export const Form = () => {
  return (
    <div className="mt-8 ">
      <div class="w-full max-w-sm p-2 rounded-lg mx-auto">
      <h5 class="text-6xl font-bold">
            RSVP
          </h5>
        <form class="space-y-2" action="#">      
          <div className="mt-8">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mallard-500 focus:border-mallard-500 block w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
                Best Wishes
            </label>
            <textarea
              id="message"
              rows="3"
              class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mallard-500 focus:border-mallard-500"
              placeholder="Leave a your best wishes here..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full text-white bg-mallard-900 hover:bg-mallard-950 focus:ring-4 focus:outline-none focus:ring-mallard-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};