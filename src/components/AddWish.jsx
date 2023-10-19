"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const AddWish = (props) => {
  const {namewish} = props

  const [name, setName] = useState(namewish);
  const [wish, setWish] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/v1/wish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        wish,
      }),
    });
    setName(namewish);
    setWish("");
    router.refresh();
  };
  return (
    <div className="mt-8">
      <div className="w-full max-w-sm p-2 rounded-lg mx-auto">
        <h5 className="text-6xl font-bold">RSVP</h5>
        <form className="space-y-2" action="#">
          <div className="mt-8">
            <label className="block mb-2 text-sm text-gray-900 font-bold label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mallard-500 focus:border-mallard-500 block w-full"
              placeholder="Your Name"
              required
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-900 font-bold label">
              Best Wishes
            </label>
            <textarea
              type="text"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              rows="3"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mallard-500 focus:border-mallard-500"
              placeholder="Leave a your best wishes here..."
              required
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full text-white bg-mallard-900 hover:bg-mallard-950 focus:ring-4 focus:outline-none focus:ring-mallard-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
          >
            Add Your Best Wish!
          </button>
        </form>
      </div>
    </div>
  );
};