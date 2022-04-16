import express from "express";
import {
  getAllDinos,
  createDino,
  deleteDino,
  editDino,
} from "../controllers/dinos.js";

const router = express.Router();

router.get("/", getAllDinos);
router.post("/", createDino);
router.delete("/:id", deleteDino);
router.patch("/:id", editDino);

export default router;
