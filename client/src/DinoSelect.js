import React from "react";
import splat from "./Assets/splat.svg";
import DinoAvatar from "./DinoAvatar.js";

const DinoSelect = ({ Dinos }) => {
  console.log(Dinos);
  return (
    <div
      className="dino-selection"
      style={{ backgroundImage: `url(${splat})`, backgroundSize: "cover" }}
    >
      <div className="dino-avatars">
        {Dinos.map((Dino) => {
          console.log("Passing " + Dino._id);
          return <DinoAvatar src={Dino.image} name={Dino.name} />;
        })}
        <DinoAvatar src={Dinos[0].image} name={"steve"} active={true} />
      </div>
      <button className="add-dino-btn">Add Dino</button>
    </div>
  );
};

export default DinoSelect;
