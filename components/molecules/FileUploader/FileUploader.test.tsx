/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import FileUploader from "./FileUploader.component";

describe("FileUploader component", () => {
  it("renders the label of the file uploader", () => {
    const label = "Upload GeoJSON";
    const { getByText } = render(<FileUploader label={label} />);
    const fileUploader = getByText(label);
    expect(fileUploader).toBeDefined();
  });
});
