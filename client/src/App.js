import React, { useState } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";
import DinoLeft from "./DinoLeft.js";
import DinoRight from "./DinoRight.js";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  const [ActiveDinos, setActiveDinos] = useState([]);
  return (
    <div className="wrapper">
      <div className="main-dinos" style={{ position: "absolute" }}>
        <DinoLeft />
        <DinoRight />
      </div>
      <div className="background-palms">
        <img src={palms} className="palms" />
        <img src={palms} className="palms flipped" />
      </div>
      <h1>App</h1>
      <DinoSelect
        Dinos={Dinos}
        ActiveDinos={ActiveDinos}
        setActiveDinos={setActiveDinos}
      />
    </div>
  );
};

export default App;
