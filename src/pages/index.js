import Card from "@/Components/Card";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <h3 className="text-blue-500">Home page</h3>
        <Card title="toto" />
      </Layout>
    </div>
  );
}
