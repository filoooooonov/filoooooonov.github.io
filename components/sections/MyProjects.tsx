import React from "react";
import ProjectDemo from "./ProjectDemo";
import kukibitImg from "../../public/kukibit_preview.png";

const MyProjects = () => {
  return (
    <>
      <h2>My projects 🧑‍💻</h2>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 mt-8 mb-20">
        <ProjectDemo
          imagePath={kukibitImg}
          title="Kukibit"
          tags={["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"]}
          description="Description"
        />
      </div>
    </>
  );
};

export default MyProjects;
