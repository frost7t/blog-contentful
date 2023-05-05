/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardForm from "./CardForm";

export default function CardContact({
  title,
  adress,
  phone,
  email,
  website,
  numbers,
  mail,
  link,
  url_img,
}) {
  return (
    <>
      <div className="px-10">
        <div className="lg:px-28">
          <div className="pb-5 lg:px-11 ">
            <h1 className="font-semibold text-lg ">{title}</h1>
          </div>
          <div className="lg:flex space-x-1 justify-around md:flex-row flex-col items-center ">
            <div>
              <p className="max-w-xs">{adress}</p>
            </div>
            <div className="flex leading-10">
              <p>{phone}</p>
              <p className="font-bold">{numbers}</p>
            </div>
            <div className="flex leading-10">
              <p>{email}</p>
              <p className="font-bold">{mail}</p>
            </div>
            <div className="flex leading-10">
              <p>{website}</p>
              <p className="font-bold">{link}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100   lg:my-10 lg:mx-40">
          <div className="flex flex-col-reverse py-2 lg:flex-row ">
            <img src={url_img} alt={title} className=" object-cover w-full lg:w-6/12 " />
            <CardForm  />
          </div>
        </div>
      </div>
    </>
  );
}
