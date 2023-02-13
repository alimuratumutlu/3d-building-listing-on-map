import React from "react";
import styles from "styles/Customizer.module.css";

// Components
import { FileUploader, Typography } from "components";
import { SliderOption } from "components";

// Hooks
import useCustomizer from "hooks/useCustomizer";

// Constants
import { BUILDING_CUSTOMIZER_LABEL } from "constants/Titles";

export default function Customizer() {
  const { options } = useCustomizer();

  return (
    <div className={styles.container}>
      <FileUploader />
      <Typography className={styles.description}>
        You can import sample geojson file from <i>geojsonExamples</i> folder.
        After upload, you will be able to fly to the building area and customize
        it.
      </Typography>
      <Typography>{BUILDING_CUSTOMIZER_LABEL}</Typography>
      {options.map((option) => {
        return (
          <SliderOption
            key={option.label}
            label={option.label}
            value={option.value}
            onChange={(e, v) => option.onChange(e, v)}
          />
        );
      })}
    </div>
  );
}
