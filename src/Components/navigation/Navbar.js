import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-center py-5 space-x-5">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/post/1">
          <li>Voir Post</li>
        </Link>
      </ul>
    </div>
  );
}
