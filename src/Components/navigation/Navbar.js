import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around py-5  items-center  mx-auto bg-gradient-to-r from-[#f65aec] via-[#ed897d] to-[#fab47b]">
      <h1 className="text-white text-2xl">
        Read<span className="text-amber-300">it.</span>
      </h1>
      <ul className="flex space-x-5 text-white">
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
