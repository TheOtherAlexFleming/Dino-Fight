import React from "react";
import splat from "./Assets/splat.svg";
import DinoAvatar from "./DinoAvatar.js";

const DinoSelect = ({ Dinos, ActiveDinos, setActiveDinos }) => {
  console.log(Dinos);
  return (
    <div
      className="dino-selection"
      style={{ backgroundImage: `url(${splat})`, backgroundSize: "cover" }}
    >
      {/* Iterate over dinos stored in state */}
      <div className="dino-avatars">
        {Dinos.map((Dino) => {
          return (
            <DinoAvatar
              Dino={Dino}
              setActiveDinos={setActiveDinos}
              ActiveDinos={ActiveDinos}
            />
          );
        })}
      </div>
      <button className="add-dino-btn">Add Dino</button>
    </div>
  );
};

export default DinoSelect;
