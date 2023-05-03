import Link from "next/link";
import React from "react";

export default function Card({ img, title, extract,slug }) {
  return (
    <div className="mx-auto">
      <Link href={`post/${slug}`}>
        <img src={img} alt={title} className="w-[100%]" />
        <p className="font-bold">{title}</p>
        <p>{extract}</p>
      </Link>
    </div>
  );
}
