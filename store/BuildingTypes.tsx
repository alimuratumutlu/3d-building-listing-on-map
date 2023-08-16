/* eslint-disable no-unused-vars */
export type Geojson = {
  type: string;
  coordinates: any;
};

export type BuildingState = {
  landingArea: number;
  floorArea: number;
  landingPolygon: Geojson;
  buildingPolygon: Geojson;
  floorHeight: number;
  numberOfFloors: number;
  scaleRate: number;
};

export type BuildingContextType = {
  state: BuildingState;
  setLandingArea: (landingArea: number) => void;
  setFloorArea: (floorArea: number) => void;
  setLandingPolygon: (landingPolygon: any) => void;
  setBuildingPolygon: (buildingPolygon: any) => void;
  setFloorHeight: (floorHeight: number) => void;
  setNumberOfFloors: (numberOfFloors: number) => void;
  setScaleRate: (scaleRate: number) => void;
};

export type BuildingAction =
  | { type: "SET_LANDING_AREA"; landingArea: number }
  | { type: "SET_FLOOR_AREA"; floorArea: number }
  | { type: "SET_LANDING_POLYGON"; landingPolygon: Geojson }
  | { type: "SET_BUILDING_POLYGON"; buildingPolygon: Geojson }
  | { type: "SET_FLOOR_HEIGHT"; floorHeight: number }
  | { type: "SET_NUMBER_OF_FLOORS"; numberOfFloors: number }
  | { type: "SET_SCALE_RATE"; scaleRate: number };
