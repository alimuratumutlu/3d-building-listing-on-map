import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

// Components
import DeckGL from "@deck.gl/react";
import { Map as MapBoxMap } from "react-map-gl";

// Constants
import API_TOKEN from "constants/ApiToken";

interface BaseMapProps {
  layers?: any;
  initialViewState?: Record<string, unknown>;
  mapStyle?: string;
}

export const Map = ({ layers, initialViewState, mapStyle }: BaseMapProps) => {
  const [pageViewState, setPageViewState] = useState(initialViewState);

  const onViewStateChange = (viewState: any) => {
    setPageViewState(viewState);
  };

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
