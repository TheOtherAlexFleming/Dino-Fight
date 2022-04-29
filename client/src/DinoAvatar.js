import React from "react";

const DinoAvatar = ({ Dino, ActiveDinos, setActiveDinos }) => {
  let active = false;

  //active dino management
  if (ActiveDinos.includes(Dino)) {
    active = true;
  }

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
