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
      <div className="dino-avatars">
        {/* {Dinos.map((Dino) => {
          console.log("Passing " + Dino._id);
          return (
            <DinoAvatar
              Dino={Dino}
              setActiveDinos={setActiveDinos}
              ActiveDinos={ActiveDinos}
            />
          );
        })} */}
        <DinoAvatar
          Dino={{ ...Dinos[0], _id: "testyboi" }}
          ActiveDinos={ActiveDinos}
          setActiveDinos={setActiveDinos}
        />
      </div>
      <button className="add-dino-btn">Add Dino</button>
    </div>
  );
};

export default DinoSelect;
