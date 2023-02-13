/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import FileUploader from "./FileUploader.component";

import { UPLOAD_FILE_LABEL } from "constants/Titles";

describe("FileUploader component", () => {
  it("renders the label of the file uploader", () => {
    const { getByText } = render(<FileUploader />);
    const fileUploader = getByText(UPLOAD_FILE_LABEL);
    expect(fileUploader).toBeDefined();
  });
});
