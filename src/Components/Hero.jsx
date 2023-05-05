import React, { useState } from "react";
import Navbar from "./navigation/Navbar";

export default function Hero({ title, subtitle, url_img, description }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="relative">
        <div className="z-50 absolute top-0 left-0 w-full">
          <Navbar showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
        </div>
        <div
          className="h-screen bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(img/${url_img})`, zIndex: -1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-[#f65aec]  to-[#fab47b] opacity-70 z-10"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-left z-20">
          <div className="max-w-screen-lg mx-auto px-4">
            <p className="text-white">{subtitle}</p>
            <p className="text-white font-bold text-5xl md:text-9xl">{title}</p>
            <p className="text-white text-lg md:text-xl lg:max-w-[70%] pt-5">
              {description}
            </p>
            <a href="#main" className="text-white text-3xl mt-3">
              &#8595;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
