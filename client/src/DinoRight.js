import React from "react";

const DinoRight = ({ rightDino }) => {
  return (
    <div className="main-dino-container right">
      <div className="big-dino right"></div>
      {/* <h2 className="big-dino-name right">{rightDino.name}</h2> */}
      <h2 className="big-dino-name right">Rightosaurus</h2>
      <div className="chartright"></div>
    </div>
  );
};

export default DinoRight;
