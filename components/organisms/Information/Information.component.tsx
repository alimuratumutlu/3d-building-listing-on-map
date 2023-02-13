import React, { useEffect } from "react";
import styles from "styles/Information.module.css";

// Components
import { Typography } from "components";

// Hooks
import useCustomizer from "hooks/useCustomizer";
import useGeojson from "hooks/useGeojson";

// Constants
import { TOTAL_HEIGHT_LABEL } from "constants/Titles";

export default function Information() {
  const { options, numberOfFloors, floorHeight } = useCustomizer();
  const { geojson } = useGeojson();

  useEffect(() => {
    console.log("geojson", geojson);
    console.log("TRIGGERED BY GEOJSON");
  }, [geojson]);

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
      {geojson && (
        <div>
          <Typography>Geojson:</Typography>
          <pre>{JSON.stringify(geojson, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
