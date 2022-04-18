import React from "react";

const DinoAvatar = ({ active = false, src, name }) => {
  console.log(name);
  return (
    <div className={`dino-thumb-container ${active ? "active" : ""}`}>
      <img
        src={src}
        alt={name}
        className={`dino-thumb ${active ? "active" : ""}`}
      />
    </div>
  );
};

export default DinoAvatar;
