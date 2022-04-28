import React from "react";

const AddDinoModal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Add Dino</h2>
        <form className="add-dino-form" action="">
          <ul>
            <li>
              <label htmlFor="dinoname">Dino Name:</label>
              <input id="dinoname" type="text" />
            </li>
            <li>
              <label htmlFor="dinosize">Size (metres):</label>
              <input id="dinosize" type="number" />
            </li>
            <li>
              <label htmlFor="defence">Defence (1-10):</label>
              <input id="defence" type="number" />
            </li>{" "}
            <li>
              <label htmlFor="attack">Attack (1-10):</label>
              <input id="attack" type="number" />
            </li>{" "}
            <li>
              <label htmlFor="specialAbilityText">Special Ability:</label>
              <input id="specialAbilityText" type="text" />
            </li>{" "}
            <li>
              <label htmlFor="specialAbilityRating">
                Special Ability Rating (1-10):
              </label>
              <input id="specialAbilityRating" type="number" />
            </li>
          </ul>
          <div className="modal-btns-container">
            <button className="add-dino-btn white">Cancel</button>
            <button className="add-dino-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDinoModal;
