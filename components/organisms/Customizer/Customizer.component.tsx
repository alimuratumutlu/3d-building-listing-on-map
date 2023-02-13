import React from "react";
import styles from "styles/Customizer.module.css";

// Components
import { Typography } from "components";
import { SliderOption } from "components";

// Hooks
import useCustomizer from "hooks/useCustomizer";

export default function Customizer() {
  const {
    floorArea,
    floorHeight,
    numberOfFloors,
    handleFloorAreaChange,
    handleFloorHeightChange,
    handleNumberOfFloorsChange,
  } = useCustomizer();

  return (
    <div className={styles.container}>
      <Typography>Building Customizer</Typography>
      <SliderOption
        label="Opacity"
        value={floorArea}
        onChange={() => {
          handleFloorAreaChange;
        }}
      />
      <SliderOption
        label="Opacity"
        value={floorHeight}
        onChange={() => {
          handleFloorHeightChange;
        }}
      />
      <SliderOption
        label="Opacity"
        value={numberOfFloors}
        onChange={() => {
          handleNumberOfFloorsChange;
        }}
      />
    </div>
  );
}
