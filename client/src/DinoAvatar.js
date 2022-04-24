import React from "react";

const DinoAvatar = ({ Dino, ActiveDinos, setActiveDinos }) => {
  let active = false;
  if (ActiveDinos.includes(Dino._id)) {
    active = true;
  }

  const toggleActive = () => {
    if (ActiveDinos.includes(Dino._id)) {
      setActiveDinos(ActiveDinos.filter((DinoId) => DinoId != Dino._id));
    } else if (ActiveDinos.length > 1) {
      // setActiveDinos([ActiveDinos[1], Dino._id]);
      return;
    } else {
      setActiveDinos([...ActiveDinos, Dino._id]);
    }
  };

  return (
    <div className={`dino-thumb-container ${active ? "active" : ""}`}>
      <img
        src={Dino.image}
        alt={Dino.name}
        id={Dino._id}
        className={`dino-thumb ${active ? "active" : ""}`}
        onClick={() => toggleActive()}
      />
    </div>
  );
};

export default DinoAvatar;
