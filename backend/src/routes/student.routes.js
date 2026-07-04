import { Router } from "express";

import {
  addStudent,
  getStudents,
} from "../controllers/student.controller.js";

const router = Router();

router.post("/add", addStudent);

router.get("/", getStudents);

export default router;