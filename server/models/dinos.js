import mongoose from "mongoose";

const dinoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minLength: [5, "Dinosaur must have at least 5 characters!"],
      maxLength: [30, "what kind of long ass dinosaur name is that?"],
    },
    image: {
      type: String,
      required: [true, "Please provide image."],
    },
    size: {
      type: Number,
      required: [true, "Please provide weight."],
      min: [0.1, "What kind of baby dinosaur is that?"],
      max: [27, "No animal is that large."],
    },
    defence: {
      type: Number,
      required: [true, "Please provide defence stat between 0 and 10."],
      min: [0, "Please provide defence stat between 0 and 10."],
      max: [10, "Please provide defence stat between 0 and 10."],
    },
    attack: {
      type: Number,
      required: [true, "Please provide attack stat between 0 and 10."],
      min: [0, "Please provide attack stat between 0 and 10."],
      max: [10, "Please provide attack stat between 0 and 10."],
    },
    specialAbilityText: {
      type: String,
      required: true,
      minLength: [4, "Please provide special ability description."],
      maxLength: [
        100,
        "Please provide special ability description less than 100 characters.",
      ],
    },
    specialAbilityRating: {
      type: Number,
      required: true,
      minLength: [0, "Please provide special ability stat between 0 and 10."],
      maxLength: [10, "Please provide special ability stat between 0 and 10."],
    },
  },
  { timestamps: true }
);

const Dinos = mongoose.model("Dinos", dinoSchema);

export default Dinos;
