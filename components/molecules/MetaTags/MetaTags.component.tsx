import React from "react";
import Head from "next/head";

interface MetaTagsProps {
  tags: {
    name: string;
    content: string;
  }[];
}

export default function MetaTags({ tags }: MetaTagsProps) {
  return (
    <Head>
      <title>{tags[0].name}</title>
      {tags.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
