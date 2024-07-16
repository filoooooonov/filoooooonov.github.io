import React from "react";
import ProjectDemo from "./ProjectDemo";
import kukibitImg from "../../public/kukibit_preview.png";
import ruokascraperImg from "../../public/ruokascraper.png";
import pectoImg from "../../public/pecto.png";
import { FaArrowRight } from "react-icons/fa6";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
  return (
    <section className={className}>
      <h2>My projects 🧑‍💻</h2>
      <div className="flex flex-col lg:grid grid-cols-2 gap-10 mt-8 sm:bg-box sm:p-8 rounded-3xl sm:border-t border-[#45417136] mb-[150px]">
        <ProjectDemo
          imagePath={kukibitImg}
          title="Portfolio website for Kukibit"
          tags={["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"]}
          description="A custom built business portfolio website for Kukibit, an IT
              services company based in Lappeenranta, Finland."
        />

        <ProjectDemo
          imagePath={ruokascraperImg}
          title="Ruokascraper"
          tags={["FIGMA"]}
          description="Ruokascraper is a price aggregator that helps you save money on groceries in Finnish S- and K-group stores. Currently in development."
        />

        <ProjectDemo
          imagePath={pectoImg}
          title="User interface for Pecto"
          tags={["FIGMA"]}
          description="User interface design for Pecto, a language learning app that is currently in development."
        />
      </div>
      {/* <button className="hover:bg-box text-zinc-500 rounded-xl w-max mx-auto py-4 px-6 flex items-center gap-2 mt-4 mb-20 hover:text-zinc-300 transition duration-200">
        See all projects <FaArrowRight />
      </button> */}
    </section>
  );
};

export default MyProjects;
