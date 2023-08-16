import { useContext } from "react";
import BuildingContext from "store/BuildingContext";

// Helpers
import { resizePolygon } from "helpers/PolygonHelpers";

export default function useCustomizer() {
  const {
    state,
    setBuildingPolygon,
    setFloorHeight,
    setNumberOfFloors,
    setScaleRate,
  } = useContext(BuildingContext);

  const handleScaleRateChange = (event: any, newValue: number | number[]) => {
    setScaleRate(newValue as number);
    resizePolygon(
      state.buildingPolygon,
      newValue as number,
      setBuildingPolygon
    );
  };

  const handleFloorHeightChange = (event: any, newValue: number | number[]) => {
    setFloorHeight(newValue as number);
  };

  const handleNumberOfFloorsChange = (
    event: any,
    newValue: number | number[]
  ) => {
    setNumberOfFloors(newValue as number);
  };

  const options = [
    {
      label: "Floor Area",
      value: state.scaleRate,
      calculatedValue: state.floorArea,
      onChange: handleScaleRateChange,
      unit: "m²",
      min: 0,
      step: 0.25,
      max: 1,
    },
    {
      label: "Floor Height",
      value: state.floorHeight,
      onChange: handleFloorHeightChange,
      max: 10,
      unit: "m",
    },
    {
      label: "Floor Count",
      value: state.numberOfFloors,
      onChange: handleNumberOfFloorsChange,
      max: 1000,
      unit: "",
    },
  ];

  return {
    options,
    handleScaleRateChange,
    handleFloorHeightChange,
    handleNumberOfFloorsChange,
  };
}
