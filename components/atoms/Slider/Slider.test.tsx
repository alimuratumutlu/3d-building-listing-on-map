/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider.component";

describe("Slider", () => {
  it("should trigger onChange event when the slider is moved", () => {
    const value = 50;
    const onChange = jest.fn();
    render(<Slider value={value} onChange={onChange} />);
    const sliderThumb = screen.getByRole("slider", { name: "50" });
    sliderThumb.click();
    expect(onChange).toHaveBeenCalledWith(50);
  });
});
