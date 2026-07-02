import express from "express";

import {
  fetchProjects,
  addProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", fetchProjects);

router.post("/", addProject);

export default router;
