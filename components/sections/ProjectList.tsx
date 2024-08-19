import kukibitImg from "@/public/kukibit_preview.png";
import ruokascraperImg from "@/public/ruokascraper.png";
import pectoImg from "@/public/pecto.png";
import mathIAImg from "@/public/mathia_screenshot.png";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  image: StaticImageData;
  category: string;
  tags: string[];
  descriptionShort: string;
  descriptionLong: string;
}

export const projects = [
  {
    title: "Portfolio website for Kukibit",
    image: kukibitImg,
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
    descriptionShort:
      "A custom built business portfolio website for Kukibit, an IT services company based in Lappeenranta, Finland.",
    descriptionLong: "In progress . . .",
  },
  {
    title: "Ruokascraper",
    image: ruokascraperImg,
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "WEB SCRAPING", "FIREBASE"],
    descriptionShort:
      "Ruokascraper is a price aggregator that helps you save money on groceries in Finnish S- and K-group stores. Currently in development.",
    descriptionLong:
      "Ruokascraper is a service that helps you save money and time on your groceries. You can input your grocery list and Ruokascraper will find the cheapest deals from K-Group and S-Group stores and sort them into two grocery lists, each for a separate store chain. Currently in development.",
  },
  {
    title: "User interface for Pecto",
    image: pectoImg,
    category: "uiux",
    tags: ["FIGMA"],
    descriptionShort:
      "User interface design for Pecto, a language learning app that is currently in development.",
    descriptionLong:
      "Pecto is a language learning app for learning Finnish language that is still in development. My job in this project is to design the user interface of the app, as well as its color scheme and layout.",
  },
];
