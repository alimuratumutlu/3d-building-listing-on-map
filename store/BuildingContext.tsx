import { createContext } from "react";
import { BuildingContextType } from "./BuildingTypes";

const BuildingContext = createContext<BuildingContextType>({
  state: {
    geojson: { type: "", coordinates: [] },
    floorArea: 0,
    floorHeight: 0,
    numberOfFloors: 5,
  },
  setGeoJson: () => {},
  setFloorArea: () => {},
  setFloorHeight: () => {},
  setNumberOfFloors: () => {},
});

export default BuildingContext;
