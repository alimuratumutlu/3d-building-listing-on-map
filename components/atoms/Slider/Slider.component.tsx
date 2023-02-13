import React, { useState } from "react";
import { Slider as MuiSlider } from "@mui/material";

interface Props {
  value: number;
  onChange: (event: any, newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<Props> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    onChange(event, newValue as number);
  };

  return (
    <MuiSlider
      value={sliderValue}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Slider;
