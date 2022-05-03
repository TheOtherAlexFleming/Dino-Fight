import axios from "axios";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const DinoAvatar = ({
  Dino,
  allDinos,
  setAllDinos,
  ActiveDinos,
  setActiveDinos,
  setEditedDino,
  setIsEditModalOpen,
}) => {
  const toggleActive = () => {
    if (ActiveDinos.includes(Dino)) {
      setActiveDinos(ActiveDinos.filter((ActiveDino) => ActiveDino != Dino));
    } else if (ActiveDinos.length > 1) {
      // not sure if we want to auto-remove the last selected dino, first, or neither
      // setActiveDinos([ActiveDinos[1], Dino._id]);
      return;
    } else {
      setActiveDinos([...ActiveDinos, Dino]);
    }
  };

  const openEdit = (Dino) => {
    setEditedDino(Dino);
    console.log(Dino);
    setIsEditModalOpen(true);
  };

  // actual API call, deletes from DB, also deletes FE to
  // eliminate latent deletion
  const deleteDino = async (Dino) => {
    console.log(`Deleting ${Dino.name}`);
    try {
      await axios.delete(`http://localhost:5000/dinos/${Dino._id}`, {
        crossorigin: true,
      });
      setAllDinos(allDinos.filter((dinosaur) => dinosaur._id !== Dino._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dino-thumb-container">
      <button className="close-x" onClick={() => deleteDino(Dino)}>
        X
      </button>
      <button className="edit-btn" onClick={() => openEdit(Dino)}>
        <FontAwesomeIcon icon={faPen} className="pen" />
      </button>
      <img
        src={Dino.image}
        alt={Dino.name}
        id={Dino._id}
        // className={`dino-thumb ${active ? "active" : ""}`}
        className={`dino-thumb ${ActiveDinos.includes(Dino) ? "active" : ""}`}
        onClick={() => toggleActive()}
      />
    </div>
  );
};

export default DinoAvatar;
