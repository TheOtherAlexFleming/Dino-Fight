import Dinos from "../models/dinos.js";

export const getAllDinos = async (req, res) => {
  try {
    const allDinos = await Dinos.find();
    console.log("should be getting the dinos");
    res.status(200).json(allDinos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDino = async (req, res) => {
  try {
    const {
      name,
      image,
      size,
      attack,
      defence,
      specialAbilityText,
      specialAbilityRating,
    } = req.body;
    const createdDino = await Dinos.create({
      name,
      image,
      size,
      attack,
      defence,
      specialAbilityRating,
      specialAbilityText,
    });
    res.status(201).json(createdDino);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editDino = async (req, res) => {
  try {
    const updateId = req.params.id;
    const {
      name,
      image,
      size,
      attack,
      defence,
      specialAbilityText,
      specialAbilityRating,
    } = req.body;
    const editedDino = await Dinos.findByIdAndUpdate(updateId, {
      name,
      image,
      size,
      attack,
      defence,
      specialAbilityRating,
      specialAbilityText,
    });
    res.status(200).json(editedDino);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteDino = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deletedDino = await Dinos.findByIdAndDelete(deleteId);
    res.status(200).json(deletedDino);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
