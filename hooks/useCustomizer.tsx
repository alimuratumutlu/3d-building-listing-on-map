import { useState } from "react";

export default function useCustomizer() {
  const [floorArea, setFloorArea] = useState(0);
  const [floorHeight, setFloorHeight] = useState(0);
  const [numberOfFloors, setNumberOfFloors] = useState(0);

  const handleFloorAreaChange = (newValue: number | number[]) => {
    setFloorArea(newValue as number);
  };

  const handleFloorHeightChange = (newValue: number | number[]) => {
    setFloorHeight(newValue as number);
  };

  const handleNumberOfFloorsChange = (newValue: number | number[]) => {
    setNumberOfFloors(newValue as number);
  };

  return {
    floorArea,
    floorHeight,
    numberOfFloors,
    handleFloorAreaChange,
    handleFloorHeightChange,
    handleNumberOfFloorsChange,
  };
}
