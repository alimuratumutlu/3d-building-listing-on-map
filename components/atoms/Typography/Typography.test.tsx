/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Typography from "./Typography.component";

describe("Typography", () => {
  it("should display text with specified variant", () => {
    const text = "Hello World";
    const variant = "h1";
    render(<Typography variant={variant}>{text}</Typography>);
    const typography = screen.getByText(text);
    expect(typography).toBeDefined();
  });
});
