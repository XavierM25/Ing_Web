import React from "react";
import {Checkbox} from "@nextui-org/react";
import '../../../layouts/styles/global.css'

export default function App() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected} classNames={{ label: 'checkbox-label-white' }}>
        Recordar en este dispositivo
      </Checkbox>
    </div>
  );
}
