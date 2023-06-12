import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Toggle from "./components/Toggle";
import { data } from "./utils/data";

function App() {
  const { annually, monthly } = data;
  const [isOn, setIsOn] = useState(false);
  const [price, setPrice] = useState(annually);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn) {
      setPrice([...annually]);
    } else {
      setPrice([...monthly]);
    }
  };
  return (
    <main>
      <Toggle isOn={isOn} toggleSwitch={toggleSwitch} />
      <Card data={price} />
    </main>
  );
}

export default App;
