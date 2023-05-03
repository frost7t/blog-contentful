import Hero from "@/Components/Hero";
import Card from "@/Components/cards/Card";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Layout>
        <Hero 
        url_img="../img/bg_1.jpg"
        title="Readit blog"
        subtitle="For the away,behind the word moutains,far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        />
        <main className="grid-cols-3 gap-3">
          {posts.map((post) => (
            <Card
              key={post.sys.id}
              title={post.fields.title}
              extract={post.fields.extract}
              img={post.fields.featureImage.fields.file.url}
              slug={post.fields.slug}
            />
          ))}
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // 1.Connecte à Contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // 2. je récupère ma date en cas de success pour le  content_type =>
  const data = await client.getEntries({
    content_type: "blog",
    order: "sys.createdAt",
    limit: 8,
  });

  // 3.on envoie la data dans le props de ma page
  return {
    props: {
      posts: data.items,
    },
  };
}
