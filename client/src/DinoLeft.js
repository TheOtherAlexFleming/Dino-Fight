import React from "react";
import DinoChart from "./DinoChart.js";

const DinoLeft = ({ leftDino }) => {
  if (leftDino) {
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
        <div className="chart">chart goes here lol</div>
      </div>
    );
  }
};

export default DinoLeft;
