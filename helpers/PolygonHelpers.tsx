/* eslint-disable no-unused-vars */
import * as turf from "@turf/turf";

export const calculatePolygonArea = async (
  coordinates: any,
  callback: (e: any) => void
) => {
  if (coordinates[0][0]) {
    let polygon = turf.polygon([[...coordinates[0][0]]]);
    let area = turf.area(polygon);
    callback(Math.ceil(area));
  }
};

export const resizePolygon = async (
  data: any,
  factor: number = 0.5,
  callback: (e: any) => void
) => {
  if (data?.coordinates[0][0]) {
    const polygon = turf.polygon([[...data.coordinates[0][0]]]);
    const resizedPolygon = turf.transformScale(polygon, factor, {
      origin: "center",
    });
    callback(resizedPolygon.geometry);
  }
};
