import React from "react";
import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
}

export default function MetaTags({ title, description }: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
