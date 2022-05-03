import axios from "axios";
import React from "react";
import { useState } from "react";

const EditDinoModal = ({ isEditModalOpen, setIsEditModalOpen, Dino }) => {
  console.log(Dino);

  const [form, setForm] = useState({
    name: Dino.name,
    attack: Dino.attack,
    defence: Dino.defence,
    image: Dino.image,
    size: Dino.size,
    specialAbilityRating: Dino.specialAbilityRating,
    specialAbilityText: Dino.specialAbilityText,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const submitDinoEdit = async (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target["name"].value;
    const image = e.target["image"].value;
    const size = parseInt(e.target["size"].value);
    const defence = parseInt(e.target["defence"].value);
    const attack = parseInt(e.target["attack"].value);
    const specialAbilityText = e.target["specialAbilityText"].value || "";
    const specialAbilityRating =
      parseInt(e.target["specialAbilityRating"].value) || 0;
    console.log(name, image, size, defence, attack);
    try {
      await axios.patch(
        `http://localhost:5000/dinos/${Dino._id}`,
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

      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  return (
    <div className={`modal-container ${isEditModalOpen ? "" : "hidden"}`}>
      <div className="modal">
        <h2>Edit {Dino.name}</h2>
        <form className="add-dino-form" onSubmit={(e) => submitDinoEdit(e)}>
          <ul>
            <li>
              <label htmlFor="name">Dino Name:</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="size">Size (1-10):</label>
              <input
                id="size"
                type="number"
                value={form.size}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="defence">Defence (1-10):</label>
              <input id="defence" type="number" value={form.defence} />
            </li>
            <li>
              <label htmlFor="attack">Attack (1-10):</label>
              <input id="attack" type="number" value={form.attack} />
            </li>
            <li>
              <label htmlFor="image">Image URL:</label>
              <input id="image" type="text" value={form.image} />
            </li>
            <li>
              <label htmlFor="specialAbilityText">Special Ability:</label>
              <input
                id="specialAbilityText"
                type="text"
                value={form.specialAbilityText}
              />
            </li>
            <li>
              <label htmlFor="specialAbilityRating">
                Special Ability Rating (1-10):
              </label>
              <input
                id="specialAbilityRating"
                type="number"
                value={form.specialAbilityRating}
              />
            </li>
          </ul>
          <div className="modal-btns-container">
            <button
              className="add-dino-btn white"
              onClick={(e) => {
                e.preventDefault();
                setIsEditModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button className="add-dino-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDinoModal;
