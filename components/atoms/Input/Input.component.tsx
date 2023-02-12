import React from "react";
import { Input as MuiInput } from "@mui/material";

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FC<Props> = ({ value = "", onChange, type = "text" }) => {
  return <MuiInput value={value} onChange={onChange} type={type} />;
};

export default Input;
