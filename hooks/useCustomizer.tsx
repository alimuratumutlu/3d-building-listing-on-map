import { useContext } from "react";
import BuildingContext from "store/BuildingContext";

export default function useCustomizer() {
  const { state, setFloorArea, setFloorHeight, setNumberOfFloors } =
    useContext(BuildingContext);

  const handleFloorAreaChange = (newValue: number | number[]) => {
    setFloorArea(newValue as number);
  };

  const handleFloorHeightChange = (newValue: number | number[]) => {
    setFloorHeight(newValue as number);
  };

  const handleNumberOfFloorsChange = (newValue: number | number[]) => {
    setNumberOfFloors(newValue as number);
  };

  const options = [
    {
      label: "Floor Area",
      value: state.floorArea,
      onChange: handleFloorAreaChange,
    },
    {
      label: "Floor Height",
      value: state.floorHeight,
      onChange: handleFloorHeightChange,
    },
    {
      label: "Floor Count",
      value: state.numberOfFloors,
      onChange: handleNumberOfFloorsChange,
    },
  ];

  return {
    options,
    handleFloorAreaChange,
    handleFloorHeightChange,
    handleNumberOfFloorsChange,
  };
}
