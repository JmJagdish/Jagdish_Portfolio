"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/project.service";

interface Project {
  _id: string;
  title: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
  live: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await getProjects();

        setProjects(result.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    loading,
  };
};
