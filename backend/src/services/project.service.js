import Project from "../models/project.model.js";

export const getProjects = () => {
  return Project.find();
};

export const createProject = (data) => {
  return Project.create(data);
};
