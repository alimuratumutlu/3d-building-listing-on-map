import { useReducer } from "react";

import BuildingContext from "./BuildingContext";
import BuildingReducer from "./BuildingReducer";
import { Geojson } from "./BuildingTypes";

const initialState = {
  landingArea: 0,
  floorArea: 0,
  landingPolygon: { type: "", coordinates: [] },
  buildingPolygon: { type: "", coordinates: [] },
  floorHeight: 4,
  numberOfFloors: 45,
  scaleRate: 0.5,
};

export default function BuildingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(BuildingReducer, initialState);

  const setLandingArea = (landingArea: number) => {
    dispatch({ type: "SET_LANDING_AREA", landingArea });
  };

  const setFloorArea = (floorArea: number) => {
    dispatch({ type: "SET_FLOOR_AREA", floorArea });
  };

  const setLandingPolygon = (landingPolygon: Geojson) => {
    dispatch({ type: "SET_LANDING_POLYGON", landingPolygon });
  };

  const setBuildingPolygon = (buildingPolygon: Geojson) => {
    dispatch({ type: "SET_BUILDING_POLYGON", buildingPolygon });
  };

  const setFloorHeight = (floorHeight: number) => {
    dispatch({ type: "SET_FLOOR_HEIGHT", floorHeight });
  };

  const setNumberOfFloors = (numberOfFloors: number) => {
    dispatch({ type: "SET_NUMBER_OF_FLOORS", numberOfFloors });
  };

  const setScaleRate = (scaleRate: number) => {
    dispatch({ type: "SET_SCALE_RATE", scaleRate });
  };

  return (
    <BuildingContext.Provider
      value={{
        state,
        setLandingArea,
        setFloorArea,
        setLandingPolygon,
        setBuildingPolygon,
        setFloorHeight,
        setNumberOfFloors,
        setScaleRate,
      }}
    >
      {children}
    </BuildingContext.Provider>
  );
}
