import axios from "axios";
import React from "react";

const AddDinoModal = ({ isModalOpen, setIsModalOpen }) => {
  const submitDino = async (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target["dinoname"].value;
    const image = e.target["imageLink"].value;
    const size = parseInt(e.target["dinosize"].value);
    const defence = parseInt(e.target["defence"].value);
    const attack = parseInt(e.target["attack"].value);
    const specialAbilityText = e.target["specialAbilityText"].value || "";
    const specialAbilityRating =
      parseInt(e.target["specialAbilityRating"].value) || 0;
    console.log(name, image, size, defence, attack);
    try {
      await axios.post(
        "http://localhost:5000/dinos",
        {
          name,
          image,
          size,
          defence,
          attack,
          specialAbilityRating,
          specialAbilityText,
        },
        { crossdomain: true }
      );
      setIsModalOpen(false);
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  return (
    <div className={`modal-container ${isModalOpen ? "" : "hidden"}`}>
      <div className="modal">
        <h2>Add Dino</h2>
        <form className="add-dino-form" onSubmit={(e) => submitDino(e)}>
          <ul>
            <li>
              <label htmlFor="dinoname">Dino Name:</label>
              <input id="dinoname" type="text" />
            </li>
            <li>
              <label htmlFor="dinosize">Size (1-10):</label>
              <input id="dinosize" type="number" />
            </li>
            <li>
              <label htmlFor="defence">Defence (1-10):</label>
              <input id="defence" type="number" />
            </li>
            <li>
              <label htmlFor="attack">Attack (1-10):</label>
              <input id="attack" type="number" />
            </li>
            <li>
              <label htmlFor="imageLink">Image URL:</label>
              <input id="imageLink" type="text" />
            </li>
            <li>
              <label htmlFor="specialAbilityText">Special Ability:</label>
              <input id="specialAbilityText" type="text" />
            </li>
            <li>
              <label htmlFor="specialAbilityRating">
                Special Ability Rating (1-10):
              </label>
              <input id="specialAbilityRating" type="number" />
            </li>
          </ul>
          <div className="modal-btns-container">
            <button
              className="add-dino-btn white"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="add-dino-btn"
              type="submit"
              //   onClick={(e) => e.preventDefault()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDinoModal;
