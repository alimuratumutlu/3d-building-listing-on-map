/* eslint-disable react-hooks/exhaustive-deps */
import {
  useContext,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import BuildingContext from "store/BuildingContext";

// Components
import DeckGL, { FlyToInterpolator } from "deck.gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { Map as MapUi } from "react-map-gl";

interface initialViewStateProps {
  latitude: number;
  longitude: number;
  zoom: number;
  pitch: number;
  transitionDuration: number;
  opacity?: number;
  transitionInterpolator?: FlyToInterpolator;
}

export const Map = () => {
  const { state, setBuildingPolygon, setLandingPolygon } =
    useContext(BuildingContext);

  const [initialViewState, setInitialViewState] =
    useState<initialViewStateProps>({
      longitude: 6.6111029,
      latitude: 46.5141469,
      zoom: 17,
      pitch: 10,
      transitionDuration: 8000,
      opacity: 0.5,
    });

  const goToNewCoordinate = useCallback(() => {
    if (state.landingPolygon?.coordinates[0] !== undefined) {
      setInitialViewState({
        longitude: state.landingPolygon.coordinates[0][0][0][0],
        latitude: state.landingPolygon.coordinates[0][0][0][1],
        zoom: 16,
        pitch: 10,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
      });
    }
  }, [state.landingPolygon]);

  useEffect(() => {
    goToNewCoordinate();
  }, [goToNewCoordinate]);

  const LandingLayer = useMemo(() => {
    let layer = new GeoJsonLayer({
      id: "building",
      data: {
        type: "Feature",
        properties: {},
        geometry: state.landingPolygon,
      },
      filled: true,
      stroked: true,
      extruded: false,
      getLineWidth: 5,
      lineWidthUnits: "meters",
      autoHighlight: true,
      highlightColor: [100, 111, 255, 220],
      getFillColor: [133, 133, 133, 200],
      getLineColor: [111, 111, 111],
      getPointRadius: 100,
    });

    return layer;
  }, [state.landingPolygon]);

  const BuildingLayer = useMemo(() => {
    let layer = new GeoJsonLayer({
      id: "building",
      data: {
        type: "Feature",
        properties: {},
        geometry: state.buildingPolygon,
      },
      filled: true,
      stroked: true,
      extruded: true,
      getLineWidth: 5,
      lineWidthUnits: "meters",
      getElevation: state.floorHeight,
      autoHighlight: true,
      highlightColor: [100, 111, 255],
      getFillColor: [160, 160, 180, 200],
      getLineColor: [125, 125, 125],
      getPointRadius: 100,
      elevationScale: state.numberOfFloors,
    });

    return layer;
  }, [state.buildingPolygon, state.floorHeight, state.numberOfFloors]);

  const mapRef = useRef(null);
  const deckRef = useRef(null);

  return (
    <DeckGL
      ref={deckRef}
      controller={true}
      initialViewState={initialViewState}
      layers={[LandingLayer, BuildingLayer]}
    >
      <MapUi
        ref={mapRef}
        style={{ height: "100vh" }}
        mapStyle="mapbox://styles/rafilos556/ckhrp0auk0ol119s02qvctvh4"
        mapboxAccessToken="pk.eyJ1IjoicmFmaWxvczU1NiIsImEiOiJja2hoaHFwZjcwZ3pyMnFwNmY3aHY2eDg4In0.Ai4rUxBMjwoNzHTIDqmuBA"
      />
    </DeckGL>
  );
};

export default Map;
