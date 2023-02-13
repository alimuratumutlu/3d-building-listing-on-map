import { useContext } from "react";
import BuildingContext from "store/BuildingContext";

export default function useGeojson() {
  const { setGeoJson } = useContext(BuildingContext);

  const uploadFile = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        const data = JSON.parse(reader.result as string);
        console.log(data.coordinates, "GEOJSON DATA");
        setGeoJson(data);
      }
    };

    reader.readAsText(file);
  };

  return { uploadFile };
}
