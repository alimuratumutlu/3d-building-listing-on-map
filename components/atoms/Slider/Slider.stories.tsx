import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "./Slider.component";

storiesOf("Slider", module).add("default", () => (
  <Slider value={50} onChange={() => {}} />
));
