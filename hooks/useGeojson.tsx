import { useState } from "react";

export default function useGeojson() {
  const [geojson, setGeojson] = useState([]);

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

  return { geojson, uploadFile };
}
