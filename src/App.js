import Heading from "./Heading";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { useState } from "react";

function App() {
  const [colorValue,setColorValue]=useState('');
 
  return (
    <div className="App">
      <Heading
      colorValue={colorValue}
      />
      <Content2
      colorValue={colorValue}
      />
      <Content3
      colorValue={colorValue}
      setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
