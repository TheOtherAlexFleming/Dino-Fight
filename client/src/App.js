import React, { useState, useEffect } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";
import DinoLeft from "./DinoLeft.js";
import DinoRight from "./DinoRight.js";
import AddDinoModal from "./AddDinoModal.js";
import axios from "axios";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  const [ActiveDinos, setActiveDinos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setAllDinos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/dinos", {
        crossdomain: true,
      });
      const data = response.data;
      setDinos(data);

      // axios
      //   .get("http:/localhost:5000/dinos", { crossdomain: true })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
      //   .catch(console.log("oops"));
    } catch (error) {
      setDinos(testRexes);
      console.log(error);
    }
  };

  useEffect(() => {
    setAllDinos();
  }, [isModalOpen]);

  return (
    <div className="wrapper">
      <AddDinoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <button onClick={() => getAllDinos()}>get dinos</button> */}
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
        setDinos={setDinos}
        ActiveDinos={ActiveDinos}
        setActiveDinos={setActiveDinos}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default App;
