import React from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "@/components/sections/ProjectDemoHorizontal";

const page = () => {
  return (
    <section className="max-w-[1024px] mx-auto">
      <h2>Projects 🧑‍💻</h2>

      <h3 id="webdev" className="mt-12 mb-6 text-zinc-400">
        Web Development
      </h3>
      {projects.map((project) => {
        return (
          <>
            {project.category === "webdev" && (
              <>
                <ProjectDemoHorizontal project={project} />
              </>
            )}
          </>
        );
      })}

      <h3 id="uiux" className="mt-12 mb-6 text-zinc-400">
        UI/UX
      </h3>
      {projects.map((project) => {
        return (
          <>
            {project.category === "uiux" && (
              <>
                <ProjectDemoHorizontal project={project} />
              </>
            )}
          </>
        );
      })}

      <h3 id="datascience" className="mt-12 mb-6 text-zinc-400">
        Data Science
      </h3>
      {projects.map((project) => {
        return (
          <>
            {project.category === "datascience" && (
              <>
                <ProjectDemoHorizontal project={project} />
              </>
            )}
          </>
        );
      })}
    </section>
  );
};

export default page;
