import { useContext } from "react";
import * as turf from "@turf/turf";

import BuildingContext from "store/BuildingContext";

export default function useGeojson() {
  const { setGeoJson, setFloorArea } = useContext(BuildingContext);

  const updateArea = (coordinates: any) => {
    let polygon = turf.polygon([[...coordinates[0][0]]]);
    let area = turf.area(polygon);
    setFloorArea(Math.ceil(area));
  };

  const uploadFile = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        const data = JSON.parse(reader.result as string);
        setGeoJson(data);
        updateArea(data.coordinates);
      }
    };

    reader.readAsText(file);
  };

  return { uploadFile };
}
