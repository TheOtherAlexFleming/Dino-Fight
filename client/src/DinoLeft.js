import React from "react";
import DinoChart from "./DinoChart.js";

const DinoLeft = ({ leftDino }) => {
  if (leftDino) {
    //for special bar, didn't want to use chart.js for practice
    const specialBarStyle = {
      backgroundImage: `linear-gradient(to top, var(--secondary) ${
        10 * leftDino.specialAbilityRating
      }%, rgba(0,0,0,0) ${10 * leftDino.specialAbilityRating}%)`,
      transition: "background-image 1s linear",
    };

    return (
      <div className="main-dino-container">
        <div className="big-dino">
          <img
            className="big-dino-img"
            src={leftDino.image}
            alt={leftDino.name}
          />
        </div>
        <h2 className="big-dino-name">{leftDino.name}</h2>
        <div className="special-container">
          <div className="special-bar" style={specialBarStyle}></div>
          <p className="special-text">Special: {leftDino.specialAbilityText}</p>
        </div>
        <DinoChart Dino={leftDino} />
      </div>
    );
  } else {
    return (
      <div className="main-dino-container">
        <div className="big-dino">
          <img
            className="big-dino-img"
            src="https://media.istockphoto.com/photos/ancient-stone-egg-with-cracks-isolated-on-white-picture-id658243972?k=20&m=658243972&s=612x612&w=0&h=vRMyqyMcKIiDLGDQ0WCpQqjtI_cjaVsJ38IgfueCpNk="
            alt="Unselected Dino"
          />
        </div>
        <h2 className="big-dino-name">{leftDino ? leftDino.name : "Select"}</h2>
        <div className="chart"></div>
      </div>
    );
  }
};

export default DinoLeft;
