import Layout from "@/layout/Layout";
import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import HeroOtherPage from "@/Components/HeroOtherPage";
import CardPost from "@/Components/cards/CardPost";

// 1. connection à contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//  2.générer les slugs ou les articles
export async function getStaticPaths() {
  // je récupère les posts dans contentful
  const res = await client.getEntries({
    content_type: "blog",
  });

  const slugs = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  // envoies tous les slugs dans paths (chemin || route)
  return {
    paths: slugs,
    fallback: false,
    // tout les chemins qui ne sont pas son pathss => error 404
  };
}

// recupere data du post en fonction du slug

export async function getStaticProps({ params }) {
  // récupere la data
  const res = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  // je stock la data du post dans une variable
  const post = res.items;

  return {
    props: {
      post: post[0],
    },
  };
}

export default function Index({ post }) {
  // console.log(post)
  const { title, content, featureImage } = post.fields;
  return (
    <Layout>
      <HeroOtherPage
        url_img="../../img/bg_1.jpg"
        title="Blog Single"
        home="Home"
        Blog="Blog"
        BlogSingle="Blogsingle"
      />
      <div className="grid grid-cols-2 gap-8 justify-center items-start py-20 px-20">
        <div>
          <img
            src={featureImage.fields.file.url}
            alt={title}
            className="w-full"
          />
        </div>
        <div>
          <CardPost />
        </div>
      </div>
    </Layout>
  );
}
