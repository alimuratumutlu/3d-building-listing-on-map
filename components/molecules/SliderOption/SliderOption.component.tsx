import React, { useId } from "react";
import styles from "styles/SliderOption.module.css";

// Components
import { Typography } from "components";
import { Slider } from "components";

interface SliderOptionProps {
  label: string;
  value: number;
  onChange: (event: any, newValue: number) => void;
}

export default function SliderOption({
  label,
  value,
  onChange,
}: SliderOptionProps) {
  return (
    <div className={styles.container}>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        value={value}
        onChange={(event: any, newValue: number) => onChange(event, newValue)}
      />
    </div>
  );
}
