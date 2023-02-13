import { useMemo, useState } from "react";
import { GeoJsonLayer } from "@deck.gl/layers";

export default function useGeojson() {
  const [geojson, setGeojson] = useState("");

  // TODO: getElevation will get the height of the building from the custom hook

  const layers = useMemo(() => {
    return [
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
        getElevation: 30,
      }),
    ];
  }, [geojson]);

  const uploadFile = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        const data = JSON.parse(reader.result as string);
        setGeojson(data);
      }
    };

    reader.readAsText(file);
  };

  return { geojson, layers, uploadFile };
}
