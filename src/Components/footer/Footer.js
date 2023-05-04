import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import CardFooter from "../cards/CardFooter";
import CardNewsFooter from "../cards/CardNewsFooter";
import CardLinkFooter from "../cards/CardLinkFooter";
import CardInfo from "../cards/CardInfo";

export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap bg-[#222831] justify-center items-center">
        <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  sm:flex-col md:flex-row">
          <div className="flex flex-col justify-center px-10 py-10">
            <CardFooter
              title="Read"
              subtitle="For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              twitterIcon={<BsTwitter className="text-white w-5 h-5" />}
              facebookIcon={<ImFacebook className="text-white w-5 h-5" />}
              spanText="it"
              spanClass="text-amber-300"
              pointColor="white"
            />
          </div>
          <div className="flex flex-col justify-center items-center px-10 py-3">
            <CardNewsFooter
              title="latest News"
              subtitle="Even the all-powerful Pointing has no control about"
              url_img="../img/image_1.jpg"
              description="oct.16,2019 Admin 19"
            />
            <CardNewsFooter
              subtitle="Even the all-powerful Pointing has no control about"
              url_img="../img/image_2.jpg"
              description="oct.16,2019 Admin 19"
            />
          </div>
          <div className=" flex flex-col justify-center py-10 px-10  lg:items-center">
            <CardLinkFooter title="information" />
          </div>
          <div className=" flex flex-col justify-center py-10 px-10">
            <CardInfo title="Have a Questions?" />
          </div>
        </div>
      </div>
      <div className="bg-[#222831] justify-center text-center font-normal text-gray-400 py-10 px-10">
        <p>
          Copyright &#169;2023 All rights reserved|This template is made
          with🤍by Colorlib
        </p>
      </div>
    </>
  );
}
