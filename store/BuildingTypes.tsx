export type Geojson = {
  type: string;
  coordinates: any;
};

export type BuildingState = {
  geojson: Geojson;
  floorArea: number;
  floorHeight: number;
  numberOfFloors: number;
};

export type BuildingContextType = {
  state: BuildingState;
  setGeoJson: (geojson: Geojson) => void;
  setFloorArea: (floorArea: number) => void;
  setFloorHeight: (floorHeight: number) => void;
  setNumberOfFloors: (numberOfFloors: number) => void;
};

export type BuildingAction =
  | { type: "SET_GEOJSON"; geojson: Geojson }
  | { type: "SET_FLOOR_AREA"; floorArea: number }
  | { type: "SET_FLOOR_HEIGHT"; floorHeight: number }
  | { type: "SET_NUMBER_OF_FLOORS"; numberOfFloors: number };
