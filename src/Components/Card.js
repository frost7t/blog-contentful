import React from "react";
import Layout from "../layout/Layout";

export default function Card({ title }) {
  return (
    <Layout>
      <div>{title}</div>
    </Layout>
  );
}
