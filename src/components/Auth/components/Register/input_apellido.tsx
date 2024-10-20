import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <Input
      isClearable
      type="text"
      label="Apellidos"
      variant="bordered"
      placeholder="Ingresa tus apellidos"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full"
    />
  );
}