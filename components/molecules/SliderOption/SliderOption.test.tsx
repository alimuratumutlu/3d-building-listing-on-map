/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SliderOption from "./SliderOption.component";

describe("SliderOption component", () => {
  it("calls the onChange function when the slider is changed", () => {
    const onChange = jest.fn();
    const label = "Opacity";
    const value = 50;
    const { getByLabelText } = render(
      <SliderOption label={label} onChange={onChange} value={value} />
    );
    const slider = getByLabelText(label);
    fireEvent.change(slider, { target: { value: 50 } });
    expect(onChange).toHaveBeenCalled();
  });
});
