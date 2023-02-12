/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input.component";

describe("MyInput", () => {
  it("should call onChange when input value changes", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    expect(onChange).toHaveBeenCalled();
  });
});
