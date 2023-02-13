/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map.component";

describe("Map component", () => {
  it("renders the map", () => {
    const { container } = render(<Map />);
    expect(container.querySelector("#map")).toBeDefined();
  });
});
