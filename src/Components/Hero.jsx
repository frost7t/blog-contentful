import React from "react";
import Navbar from "./navigation/Navbar";

export default function Hero({ title, subtitle, url_img }) {
  return (
    <div className="mx-auto">
      <Navbar />
      <img
        src={`img/${url_img}`}
        alt={title}
        className=" w-[100%]"
      />
      <p className="text-white">{title}</p>
      <p className="text-white">{subtitle}</p>
    </div>
  );
}
