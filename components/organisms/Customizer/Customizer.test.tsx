/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Customizer from "./Customizer.component";
import { BUILDING_CUSTOMIZER_LABEL } from "@constants/Titles";

describe("Customizer component", () => {
  it("renders the Customizer component", () => {
    const { getByText } = render(<Customizer />);
    expect(getByText(BUILDING_CUSTOMIZER_LABEL)).toBeDefined();
  });
});
