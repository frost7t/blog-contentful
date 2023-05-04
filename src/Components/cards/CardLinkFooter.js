import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
export default function CardLinkFooter({title}) {
  return (
    <div className="h-full">
      <h1 className="text-white pt-1">{title}</h1>
      <ul className="text-left justify-center text-white py-10">
        <Link href="/">
          <li className="flex items-center text-sm gap-2 py-2">
            <SlArrowRight className="w-3" />
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="flex items-center text-sm gap-2 py-2">
            <SlArrowRight className="w-3" />
            Team
          </li>
        </Link>
        <Link href="/contact">
          <li className="flex items-center text-sm gap-2 py-2">
            <SlArrowRight className="w-3" />
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
