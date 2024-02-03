import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState("");
  const click = () => {
    setValue("butona tiklandi");
  };
  return (
    <>
    {/* First way */}
      <button onClick={() => setValue("butona tiklandi")}>first button</button>
      {value != "" ? <h1>{value}</h1> : ""}
    {/* Second way */}
      {/* <button onClick={click}>second button</button>
      {value != "" ? <h1>{value}</h1> : ""} */}
    </>
  );
}

export default App;
