/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import MetaTags from "./MetaTags.component";

describe("MetaTags component", () => {
  it("renders the meta tags", () => {
    const tags = [
      { name: "title", content: "Title of the website" },
      { name: "description", content: "Description of the website" },
    ];
    const { getAllByRole } = render(<MetaTags tags={tags} />);
    const metaTags = getAllByRole("meta");
    tags.forEach(({ name, content }) => {
      const tag = metaTags.find(
        (metaTag) => metaTag.getAttribute("name") === name
      );
      expect(tag).toBeDefined();
      expect(tag?.getAttribute("content")).toBe(content);
    });
  });
});
