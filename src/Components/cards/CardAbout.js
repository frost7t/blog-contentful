import React from "react";
import CardTab from "./CardTab";

export default function CardAbout({ url_img, title, subtitle, description }) {
  return (
    <div className="px-5 w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto sm:flex-col md:flex-row">
      <div className="mb-8 md:mb-0 md:mr-10 relative">
        <img src={url_img} alt={title} className=" " />
        <div className="hidden md:block md:absolute md:top-1/2 md:-right-5">
          <div className="w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center">
            <svg
              viewBox="-4 0 25 20"
              fill="white"
              stroke="white"
              strokeWidth="0.3"
            >
              <path d="M6 4l8 6-8 6z" />
            </svg>
          </div>
        </div>
        <div className="block md:hidden text-center top-32 left-32 absolute">
          <div className="w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center">
            <svg
              viewBox="-4 0 25 20"
              fill="white"
              stroke="white"
              strokeWidth="0.3"
            >
              <path d="M6 4l8 6-8 6z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="py-20">
        <p className="text-gray-500 pb-1">{subtitle}</p>
        <h1 className="text-black font-bold mb-2">{title}</h1>
        <p className="pb-2">{description}</p>
        <CardTab />
      </div>
    </div>
  );
}
