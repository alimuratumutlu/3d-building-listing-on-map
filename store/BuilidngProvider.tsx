import { useReducer } from "react";
import { Geojson } from "./BuildingTypes";

import BuildingContext from "./BuildingContext";
import BuildingReducer from "./BuildingReducer";

const initialState = {
  geojson: { type: "", coordinates: [] },
  floorArea: 0,
  floorHeight: 4,
  numberOfFloors: 45,
};

export default function BuildingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(BuildingReducer, initialState);

  const setGeoJson = (geojson: Geojson) => {
    dispatch({ type: "SET_GEOJSON", geojson });
  };

  const setFloorArea = (floorArea: number) => {
    dispatch({ type: "SET_FLOOR_AREA", floorArea });
  };

  const setFloorHeight = (floorHeight: number) => {
    dispatch({ type: "SET_FLOOR_HEIGHT", floorHeight });
  };

  const setNumberOfFloors = (numberOfFloors: number) => {
    dispatch({ type: "SET_NUMBER_OF_FLOORS", numberOfFloors });
  };

  return (
    <BuildingContext.Provider
      value={{
        state,
        setGeoJson,
        setFloorArea,
        setFloorHeight,
        setNumberOfFloors,
      }}
    >
      {children}
    </BuildingContext.Provider>
  );
}
