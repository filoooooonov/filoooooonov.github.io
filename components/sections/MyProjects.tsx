import React from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "./ProjectDemoHorizontal";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
  return (
    <section className={className}>
      <h2>My projects 🧑‍💻</h2>

      <hr className="hr" />

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
