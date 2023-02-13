import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

// Components
import DeckGL from "@deck.gl/react";
import { Map as MapBoxMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";

// Hooks
import useCustomizer from "hooks/useCustomizer";
import useGeojson from "hooks/useGeojson";

// Constants
import API_TOKEN from "constants/ApiToken";

interface BaseMapProps {
  initialViewState?: Record<string, unknown>;
  mapStyle?: string;
}

export const Map = ({ initialViewState, mapStyle }: BaseMapProps) => {
  const { floorHeight } = useCustomizer();
  const { geojson } = useGeojson();

  const [pageViewState, setPageViewState] = useState(initialViewState);

  const onViewStateChange = (viewState: any) => {
    setPageViewState(viewState);
  };

  const layers = [
    new GeoJsonLayer({
      id: "geojson-layer",
      data: geojson,
      stroked: true,
      filled: true,
      extruded: true,
      lineWidthMinPixels: 2,
      getFillColor: [255, 0, 0, 255],
      getLineColor: [0, 0, 0],
      getRadius: 100,
      getLineWidth: 1,
      getElevation: floorHeight,
    }),
  ];

  return (
    <DeckGL
      onViewStateChange={onViewStateChange}
      controller={true}
      viewState={pageViewState}
      layers={layers}
    >
      <MapBoxMap
        mapboxAccessToken={API_TOKEN}
        mapStyle={mapStyle || "mapbox://styles/mapbox/satellite-streets-v11"}
        {...pageViewState}
        reuseMaps
      />
    </DeckGL>
  );
};

export default Map;
