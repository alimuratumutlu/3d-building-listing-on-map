/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Information from "./Information.component";
import { TOTAL_HEIGHT_LABEL } from "constants/Titles";

describe("Information component", () => {
  it("renders the information", () => {
    const { getByText } = render(<Information />);
    expect(getByText(TOTAL_HEIGHT_LABEL)).toBeDefined();
  });
});
