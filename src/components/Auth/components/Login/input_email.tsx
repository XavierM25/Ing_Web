import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <Input
      isClearable
      type="email"
      label="Correo"
      variant="bordered"
      placeholder="Inserta tu correo"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full"
    />
  );
}