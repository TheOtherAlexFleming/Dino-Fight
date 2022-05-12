import React from "react";
import DinoChart from "./DinoChart.js";

const DinoRight = ({ rightDino }) => {
  if (rightDino) {
    //for special bar, didn't want to use chart.js for practice
    const specialBarStyle = {
      backgroundImage: `linear-gradient(to top, var(--secondary) ${
        10 * rightDino.specialAbilityRating
      }%, rgba(0,0,0,0) ${10 * rightDino.specialAbilityRating}%)`,
      transition: "background-image 1s linear",
    };

    return (
      <div className="main-dino-container right">
        <div className="big-dino right">
          <img
            className="big-dino-img"
            src={rightDino.image}
            alt="Unselected Dino"
          />
        </div>
        <h2 className="big-dino-name right">{rightDino.name}</h2>
        <div className="special-container-right">
          <div className="special-bar" style={specialBarStyle}></div>
          <p className="special-text">
            Special: {rightDino.specialAbilityText}
          </p>
        </div>
        <DinoChart Dino={rightDino} side="right" />
      </div>
    );
  } else {
    return (
      <div className="main-dino-container right">
        <div className="big-dino right">
          <img
            className="big-dino-img"
            src="https://media.istockphoto.com/photos/ancient-stone-egg-with-cracks-isolated-on-white-picture-id658243972?k=20&m=658243972&s=612x612&w=0&h=vRMyqyMcKIiDLGDQ0WCpQqjtI_cjaVsJ38IgfueCpNk="
            alt="Unselected Dino"
          />
        </div>
        <h2 className="big-dino-name right">
          {rightDino ? rightDino.name : "Select"}
        </h2>
        <div className="chartright"></div>
      </div>
    );
  }
};

export default DinoRight;
