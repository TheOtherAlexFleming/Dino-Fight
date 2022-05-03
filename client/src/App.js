import React, { useState, useEffect } from "react";
import "./App.css";
import palms from "./Assets/palms.png";
import DinoSelect from "./DinoSelect.js";
import { testRexes } from "./Assets/testRexes.js";
import DinoLeft from "./DinoLeft.js";
import DinoRight from "./DinoRight.js";
import AddDinoModal from "./AddDinoModal.js";
import axios from "axios";
import EditDinoModal from "./EditDinoModal.js";

const App = () => {
  const [Dinos, setDinos] = useState(testRexes);
  const [ActiveDinos, setActiveDinos] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedDino, setEditedDino] = useState({});

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
  }, [isAddModalOpen, isEditModalOpen]);

  return (
    <div className="wrapper">
      <AddDinoModal
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
      />
      <EditDinoModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        Dino={editedDino}
      />
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
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setEditedDino={setEditedDino}
      />
    </div>
  );
};

export default App;
