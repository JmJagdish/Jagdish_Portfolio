import express from "express";
import cors from "cors";

import projectRoutes from "./routes/project.route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

// IMPORTANT
app.use("/api/projects", projectRoutes);

export default app;
