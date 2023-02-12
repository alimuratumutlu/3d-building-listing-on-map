import React from "react";
import { Typography as MuiTypography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  gutterBottom?: boolean;
}

const Typography: React.FC<Props> = ({
  children,
  variant = "body1",
  gutterBottom = false,
}) => {
  return (
    <MuiTypography variant={variant} gutterBottom={gutterBottom}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
