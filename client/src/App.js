import React, { useState } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";
import DinoLeft from "./DinoLeft.js";
import DinoRight from "./DinoRight.js";
import AddDinoModal from "./AddDinoModal.js";
import DinoChart from "./DinoChart.js";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  const [ActiveDinos, setActiveDinos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <AddDinoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="main-dinos">
        <DinoLeft leftDino={ActiveDinos[0]} />
        <DinoRight rightDino={ActiveDinos[1]} />
      </div>
      <div className="background-palms">
        <img src={palms} className="palms" />
        <img src={palms} className="palms flipped" />
      </div>
      <DinoSelect
        Dinos={Dinos}
        ActiveDinos={ActiveDinos}
        setActiveDinos={setActiveDinos}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default App;
