import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    image: String,

    github: String,

    live: String,

    tech:[{ type: String }]
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("projects", projectSchema);
