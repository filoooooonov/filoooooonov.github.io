import kukibitImg from "@/public/kukibit_square_preview.png";
import ruokascraperImg from "@/public/ruokascraper_mockup.webp";
import ikigaiaImg from "@/public/ikigaia_square.png";
import timelinerImg from "@/public/timeliner_square.png";
import vitalSignsImg from "@/public/vitalsigns_square.png";
import automataImg from "@/public/automata_square.png";
import hcsImg from "@/public/hcs_square.png";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  image: StaticImageData;
  link?: string;
  category?: string;
  descriptionShort: string;
  descriptionLong?: string;
}

const projectList = [
  {
    title: "Automata",
    image: automataImg,
    tags: [],
    descriptionShort: "Automata",
  },
  {
    title: "VitalSigns",
    image: vitalSignsImg,
    link: "https://vitalsigns.fi",
    tags: [],
    descriptionShort:
      "Website for a medical device startup that develops a smart modern stethoscope. ",
  },
  // {
  //   title: "Heavy Cleaning Services",
  //   link: "https://heavycleaning.fi",
  //   image: hcsImg,
  //   descriptionShort:
  //     "Website for a truck-washing company based in Helsinki, Finland.",
  // },

  // {
  //   title: "Timeliner.",
  //   image: timelinerImg,
  //   descriptionShort:
  //     "A place for startups and companies to share their stories from day one. Paused.",
  // },
  {
    title: "Website for IKIGAIA",
    image: ikigaiaImg,
    link: "https://ikigaia.fi",
    descriptionShort:
      "A portfolio website for IKIGAIA with a strong focus on presentability and professionalism. In development.",
  },
  {
    title: "Portfolio website for Kukibit",
    image: kukibitImg,
    link: "https://kukibit.fi",
    category: "webdev",
    descriptionShort:
      "Business portfolio website for Kukibit, an IT services company based in Lappeenranta, Finland. ",
  },
  // {
  //   title: "Ruokascraper",
  //   image: ruokascraperImg,
  //   category: "webdev",
  //   tags: ["NEXT.JS", "REACT", "TAILWIND", "WEB SCRAPING", "FIREBASE"],
  //   descriptionShort:
  //     "Ruokascraper is a price aggregator that helps you save money on groceries in Finnish S- and K-group stores. Paused.",
  //   descriptionLong:
  //     "Ruokascraper is a service that helps you save money and time on your groceries. You can input your grocery list and Ruokascraper will find the cheapest deals from K-Group and S-Group stores and sort them into two grocery lists, each for a separate store chain. Currently in development.",
  // },
];

export const projects = projectList.reverse();
