import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <Input
      isClearable
      type="text"
      label="Nombres"
      variant="bordered"
      placeholder="Ingresa tus nombres"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full"
    />
  );
}