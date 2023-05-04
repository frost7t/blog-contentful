import Link from "next/link";
import React from "react";

export default function Card({ img, title, extract, slug }) {
  return (
    <div className="mx-auto flex flex-col items-center py-10 px-3 relative">
      <Link href={`post/${slug}`}>
        <div className="relative">
          <img src={img} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-3 group-hover:block">
            <div className="bg-yellow-400 flex gap-1.5 text-black text-sm rounded-sm py-1 px-2 max-w-xs relative">
              <p className="text-center text-3xl font-medium">18</p>
              <p className="text-xs">
                2019
                <br />
                october
              </p>
              <div className="absolute h-3 w-3 left-1/3 transform -translate-x-1/2 top-full -mt-2">
                <div className="absolute h-full w-full bg-yellow-400 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold pt-5 max-w-sm">{title}</p>
          <p>{extract}</p>
          <div className="flex items-center gap-2 pt-3">
            <p className="">&rarr;</p>
            <p className="text-xs  uppercase">Read More</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
