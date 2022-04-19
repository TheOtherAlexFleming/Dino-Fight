import React from "react";

const DinoAvatar = ({ Dino, ActiveDinos, setActiveDinos }) => {
  let active = false;
  if (ActiveDinos.includes(Dino._id)) {
    active = true;
  }

  const toggleActive = () => {
    console.log(ActiveDinos);
    if (ActiveDinos.includes(Dino._id)) {
      console.log("id is in there");
      setActiveDinos(ActiveDinos.filter((DinoId) => DinoId != Dino._id));
    } else if (ActiveDinos.length > 1) {
      console.log("2big.jpg");
      setActiveDinos([ActiveDinos[1], Dino._id]);
    } else {
      console.log("adding");
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
