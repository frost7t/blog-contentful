import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
export default function CardInfo({ title }) {
  return (
    <>
      <div className="h-full">
        <div className="pt-1">
          <h1 className="text-white">{title}</h1>
        </div>
        <ul className=" justify-center  py-10 text-sm">
          <li className="text-gray-300 flex items-center text-sm gap-2 py-3">
            <BsFillGeoAltFill className="w-5 text-white " />
            203 Fake St.Moutian View,San Francisco,California,<br /> USA
          </li>
          <li className="text-white flex items-center text-sm gap-2 py-3">
            <IoCallSharp className="w-5" /> +2 392 3829 210
          </li>
          <li className="text-white flex items-center text-sm gap-2 py-3">
            <HiOutlineMail className="w-5 text-white" />
            info@yourdomain.com
          </li>
        </ul>
      </div>
    </>
  );
}
