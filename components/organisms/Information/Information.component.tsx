import React, { useContext } from "react";
import BuildingContext from "store/BuildingContext";

import styles from "styles/Information.module.css";

// Components
import { Typography } from "components";

// Hooks
import useCustomizer from "hooks/useCustomizer";

// Constants
import { TOTAL_HEIGHT_LABEL } from "constants/Titles";

export default function Information() {
  const { state } = useContext(BuildingContext);

  const { options } = useCustomizer();

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <Typography key={option.label}>
            {option.label}:{" "}
            {option.calculatedValue ? option.calculatedValue : option.value}{" "}
            {option.unit}
          </Typography>
        );
      })}
      <Typography>
        {TOTAL_HEIGHT_LABEL}: {state.numberOfFloors * state.floorHeight} m
      </Typography>
    </div>
  );
}
