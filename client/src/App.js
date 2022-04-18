import React, { useState } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  console.log(Dinos);
  return (
    <div className="wrapper">
      <div className="background-palms">
        <img src={palms} className="palms" />
        <img src={palms} className="palms flipped" />
      </div>
      <h1>App</h1>
      <DinoSelect Dinos={Dinos} />
    </div>
  );
};

export default App;
