import Link from "next/link";
import React from "react";

export default function Navbar({ showMenu, handleToggleMenu }) {
  return (
    <div className="flex justify-around py-5 items-center mx-auto bg-black lg:bg-transparent absolute top-0 left-0 w-full">
      <Link rel="/" href="">
        <h1 className="text-white text-2xl font-black">
          Read
          <span className="text-amber-300">
            it<span className="text-white">.</span>
          </span>
        </h1>
      </Link>
      {/* Render burger menu for mobile/tab /svg => burger + close_Burger */}
      <div className="lg:hidden">
        <button onClick={handleToggleMenu} className="flex items-center">
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="text-gray-500 ml-2 uppercase">menu</span>
            </>
          )}
        </button>
      </div>
      <ul
        className={`lg:flex space-x-5 text-white ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>Team</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
