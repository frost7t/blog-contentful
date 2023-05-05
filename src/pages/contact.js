import HeroOtherPage from "@/Components/HeroOtherPage";
import CardContact from "@/Components/cards/CardContact";
import Layout from "@/layout/Layout";
import React from "react";

export default function Contact() {
  return (
    <Layout>
      <HeroOtherPage url_img="../img/bg_1.jpg" title="Contact US" home="Home" about="about" />
      <div className=" py-20 ">
        <CardContact
        title="Contact information"
        adress="Adress:198 West 21th Street,Suite 721 New York NY 10016"
        phone="Phone:"
        numbers="+ 1235 2355 98"
        email="Email:"
        mail="info@yoursite.com"
        website="Website"
        link="yoursite.com"
        url_img="img/loca.png"
        />
      </div>
    </Layout>
  );
}
