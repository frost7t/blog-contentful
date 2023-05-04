import React from "react";

export default function CardPageNumber() {
  return (
    <div className="flex justify-center space-x-2 py-20">
      <span className="px-3 py-1 rounded-full border">&#60;</span>
      <span className="px-3 py-1 rounded-full border text-white bg-amber-400">
        1
      </span>
      <span className="px-3 py-1 border rounded-full">2</span>
      <span className="px-3 py-1 rounded-full border">3</span>
      <span className="px-3 py-1 rounded-full border">4</span>
      <span className="px-3 py-1 rounded-full border">5</span>
      <span className="px-3 py-1 rounded-full  border">&#62;</span>
    </div>
  );
}
