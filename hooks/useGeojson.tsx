import { useContext } from "react";

import BuildingContext from "store/BuildingContext";

import { calculatePolygonArea, resizePolygon } from "@/helpers/PolygonHelpers";

export default function useGeojson() {
  const {
    state,
    setBuildingPolygon,
    setLandingPolygon,
    setLandingArea,
    setFloorArea,
  } = useContext(BuildingContext);

  const uploadFile = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        const data = JSON.parse(reader.result as string);

        // Set the landing (area) polygon
        setLandingPolygon(data);

        // Calculate the landing area

        if (state.landingPolygon.coordinates) {
          calculatePolygonArea(
            state.landingPolygon.coordinates,
            setLandingArea
          );
        }

        // Resize the building polygon to fit the half of the landing (area) polygon
        resizePolygon(data, 0.5, setBuildingPolygon);

        if (state.buildingPolygon.coordinates) {
          // Calculate the building floor area
          calculatePolygonArea(state.buildingPolygon.coordinates, setFloorArea);
        }
      }
    };

    reader.readAsText(file);
  };

  return { uploadFile };
}
