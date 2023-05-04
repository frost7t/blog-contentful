import React, { useState } from "react";
import Navbar from "./navigation/Navbar";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function HeroOtherPage({ title, url_img }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative">
      <div className="z-50 absolute top-0 left-0 w-full">
        <Navbar showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
      </div>
      <div
        className="h-screen bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(img/${url_img})`, zIndex: -1 }}
      >
        <div className="absolute bottom-20 left-0 w-full text-center z-20">
          <div className="max-w-screen-lg mx-auto px-4">
            <p className="text-white font-bold text-5xl md:text-9xl mb-8">
              {title}
            </p>
            <nav className="text-white font-bold text-sm">
              <ol className="list-none  flex justify-center items-center ">
                <li className=" opacity-60">
                  <Link href="/">Home</Link>
                </li>
                <SlArrowRight className="w-3" />
                <Link href="/about">
                  <li className="opacity-30 mr-2">About</li>
                </Link>
                <SlArrowRight className="w-3" />
              </ol>
            </nav>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-[#f65aec] via-[#ed897d] to-[#fab47b] opacity-70 z-10"></div>
      </div>
    </div>
  );
}
