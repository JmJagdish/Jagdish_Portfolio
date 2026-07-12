import api from "@/lib/api";

export const getProjects = async () => {
  const { data } = await api.get("/api/projects");

  return data;
};