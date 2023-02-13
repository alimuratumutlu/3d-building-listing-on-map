import { useRef, useState } from "react";

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
  const { floorHeight } = useCustomizer();
  const { geojson } = useGeojson();

  const [pageViewState, setPageViewState] = useState(initialViewState);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 650,
    latitude: 46.5197,
    longitude: 6.6323,
    zoom: 12,
    pitch: 10,
    bearing: 60,
  });

  const jsonLayer = new GeoJsonLayer({
    id: "building",
    data: {
      type: "Feature",
      properties: {},
      geometry: geojson,
    },
    filled: true,
    stroked: true,
    extruded: true,
    getLineColor: [0, 0, 0, 255],
    getFillColor: [120, 120, 120, 0],
    getElevation: floorHeight,
    getLineWidth: 5,
    autoHighlight: true,
    highlightColor: [253, 111, 255, 220],
  });

  const layers = [
    new GeoJsonLayer({
      id: "filer",
      data: BUILDING_POLYGON,
      filled: true,
      stroked: true,
      getLineWidth: 5,
      lineWidthUnits: "pixels",
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
        style={{ height: "100vh" }}
        ref={mapRef}
        mapStyle="mapbox://styles/rafilos556/ckhrp0auk0ol119s02qvctvh4"
        mapboxAccessToken="pk.eyJ1IjoicmFmaWxvczU1NiIsImEiOiJja2hoaHFwZjcwZ3pyMnFwNmY3aHY2eDg4In0.Ai4rUxBMjwoNzHTIDqmuBA"
      />
    </DeckGL>
  );
};

export default Map;
