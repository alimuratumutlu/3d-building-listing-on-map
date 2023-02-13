import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "./Typography.component";

storiesOf("Typography", module).add("default", () => (
  <Typography>Hello World</Typography>
));
