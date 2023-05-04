import HeroOtherPage from "@/Components/HeroOtherPage";
import CardAbout from "@/Components/cards/CardAbout";
import CardAvatar from "@/Components/cards/CardAvatar";
import Layout from "@/layout/Layout";
import React from "react";
import { dataCards } from "../data/dataCards";
import CardSlideAbout from "@/Components/cards/CardSlideAbout";

export default function About() {
  return (
    <Layout>
      <HeroOtherPage url_img="../img/bg_1.jpg" title="About" />
      <div className="">
        <div>
          <CardAbout
            url_img="../img/image_9.jpg"
            title="We give you the best articles you want."
            subtitle="Welcome to Readit"
            description="Far far away, behind the word mountais, far from the countries Vokalia and Consonantia"
          />
        </div>
      </div>
      <div className="text-center py-10 px-10">
        <p className="text-xs text-gray-500">Testimonial</p>
        <h1 className="font-bold text-2xl">Happy Clients</h1>
      </div>
      <div className="flex justify-center p-5 ">
        <aside className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataCards.map((data, index) => (
            <div
              key={index}
              className={`sm:block  ${index < 1 ? "block" : "hidden"}`}
            >
              <CardAvatar
                url_img={data.url_img}
                title={data.title}
                description={data.description}
                subtitle={data.subtitle}
              />
            </div>
          ))}
        </aside>
      </div>
      <CardSlideAbout />
    </Layout>
  );
}
