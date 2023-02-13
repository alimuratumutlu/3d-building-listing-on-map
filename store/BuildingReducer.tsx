import { BuildingAction, BuildingState } from "./BuildingTypes";

export default function BuildingReducer(
  state: BuildingState,
  action: BuildingAction
): BuildingState {
  switch (action.type) {
    case "SET_GEOJSON":
      return { ...state, geojson: action.geojson };
    case "SET_FLOOR_AREA":
      return { ...state, floorArea: action.floorArea };
    case "SET_FLOOR_HEIGHT":
      return { ...state, floorHeight: action.floorHeight };
    case "SET_NUMBER_OF_FLOORS":
      return { ...state, numberOfFloors: action.numberOfFloors };
    default:
      return state;
  }
}
