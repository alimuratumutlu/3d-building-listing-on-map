import { useContext, useEffect, useMemo, useRef, useState } from "react";
import BuildingContext from "store/BuildingContext";

// Components
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { Map as MapUi } from "react-map-gl";

// Hooks
import useCustomizer from "hooks/useCustomizer";
import useGeojson from "hooks/useGeojson";

// Constants
import { INITIAL_VIEW_STATE, BUILDING_POLYGON } from "constants/View";

interface BaseMapProps {
  initialViewState?: Record<string, unknown>;
}

export const Map = ({ initialViewState }: BaseMapProps) => {
  const { state } = useContext(BuildingContext);

  const layers = [
    new GeoJsonLayer({
      id: "filer",
      data: {
        type: "Feature",
        properties: {},
        geometry: state.geojson,
      },
      filled: true,
      stroked: true,
      extruded: true,
      getLineWidth: 5,
      lineWidthUnits: "pixels",
      getElevation: state.floorHeight + 5,
      autoHighlight: true,
      highlightColor: [253, 111, 255, 220],
    }),
  ];

  const mapRef = useRef(null);
  const deckRef = useRef(null);

  return (
    <DeckGL
      ref={deckRef}
      controller={true}
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}
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
