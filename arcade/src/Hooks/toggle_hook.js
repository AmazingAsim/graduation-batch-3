import { useState } from "react";
export default function useToggle(initialValue = false){
  const [isOn,setValue] = useState(initialValue);

  function toggle(){
    setValue(isOn => !isOn)
  }

  return [isOn,toggle]
}