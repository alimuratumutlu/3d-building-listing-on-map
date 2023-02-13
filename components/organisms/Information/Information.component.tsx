import React from "react";
import styles from "styles/Information.module.css";

// Components
import { Typography } from "components";

// Hooks
import useCustomizer from "hooks/useCustomizer";

// Constants
import { TOTAL_HEIGHT_LABEL } from "@constants/Titles";

export default function Information() {
  const { options, numberOfFloors, floorHeight } = useCustomizer();

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <Typography key={option.label}>
            {option.label}: {option.value}
          </Typography>
        );
      })}
      <Typography>
        {TOTAL_HEIGHT_LABEL}: {numberOfFloors * floorHeight}
      </Typography>
    </div>
  );
}
