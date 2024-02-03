import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <button onClick={() => setValue("butona tiklandi")}>Button</button>
      {value != "" ? <h1>{value}</h1> : ""}
    </>
  );
}
