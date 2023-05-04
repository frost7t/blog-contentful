import React from "react";

export default function CardNewsFooter({
  title,
  subtitle,
  url_img,
  description,
}) {
  return (
    <div className=" h-full pt-8">
      <div>
        <h1 className="text-white ">{title}</h1>
      </div>
      <div className="flex pt-3">
        <img
          src={url_img}
          alt={title}
          className="w-20 md:h-20 object-cover rounded-md "
        />
        <div className="pl-5 flex flex-col  justify-center">
          <p className="text-gray-300 text-xs font-light  pb-3">
            {subtitle}
          </p>
          <p className="text-zinc-600 text-xs  font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
}
