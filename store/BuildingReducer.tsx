import { BuildingAction, BuildingState } from "./BuildingTypes";

export default function BuildingReducer(
  state: BuildingState,
  action: BuildingAction
): BuildingState {
  switch (action.type) {
    case "SET_BUILDING_POLYGON":
      return { ...state, buildingPolygon: action.buildingPolygon };
    case "SET_LANDING_POLYGON":
      return { ...state, landingPolygon: action.landingPolygon };
    case "SET_LANDING_AREA":
      return { ...state, landingArea: action.landingArea };
    case "SET_FLOOR_HEIGHT":
      return { ...state, floorHeight: action.floorHeight };
    case "SET_NUMBER_OF_FLOORS":
      return { ...state, numberOfFloors: action.numberOfFloors };
    case "SET_SCALE_RATE":
      return { ...state, scaleRate: action.scaleRate };
    default:
      return state;
  }
}
