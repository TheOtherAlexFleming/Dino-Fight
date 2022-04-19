import React, { useState } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  const [ActiveDinos, setActiveDinos] = useState(["625a383a80f43579eaf4c9f2"]);
  return (
    <div className="wrapper">
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
