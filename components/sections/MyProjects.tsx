import React from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "./ProjectDemoHorizontal";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
  return (
    <section className={className}>
      <h2 className="mb-16 sm:mb-40">My projects 🧑‍💻</h2>

      <div>
        {projects.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectDemoHorizontal project={project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
