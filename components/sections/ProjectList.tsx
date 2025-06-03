import kukibitImg from "@/public/kukibit_mockup.webp";
import ruokascraperImg from "@/public/ruokascraper_mockup.webp";
import ikigaiaImg from "@/public/ikigaia_mockup.webp";
import timelinerImg from "@/public/timeliner_mockup.webp";
import vitalSignsImg from "@/public/vitalsigns_mockup.svg";
import HCSImg from "@/public/HCS.png";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  image: StaticImageData;
  link?: string;
  category?: string;
  tags: string[];
  descriptionShort: string;
  descriptionLong?: string;
}

export const projects = [
  {
    title: "VitalSigns",
    image: vitalSignsImg,
    link: "https://vitalsigns.fi",
    tags: [],
    descriptionShort:
      "Website for a medical device startup that develops a smart modern stethoscope. ",
  },
  {
    title: "Heavy Cleaning Services",
    link: "https://heavycleaning.fi",
    image: HCSImg,
    tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
    descriptionShort:
      "Website for a truck-washing company based in Helsinki, Finland.",
  },

  {
    title: "Timeliner.",
    image: timelinerImg,
    tags: ["NEXT.JS", "REACT", "TAILWIND", "VERCEL", "MONGODB"],
    descriptionShort:
      "A place for startups and companies to share their stories from day one. Paused.",
  },
  // {
  //   title: "Website for IKIGAIA",
  //   image: ikigaiaImg,
  //   link: "https://ikigaia.fi",
  //   tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
  //   descriptionShort:
  //     "A portfolio website for IKIGAIA with a strong focus on presentability and professionalism. In development.",
  // },
  {
    title: "Portfolio website for Kukibit",
    image: kukibitImg,
    link: "https://kukibit.fi",
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
    descriptionShort:
      "Business portfolio website for Kukibit, an IT services company based in Lappeenranta, Finland. ",
  },
  {
    title: "Ruokascraper",
    image: ruokascraperImg,
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "WEB SCRAPING", "FIREBASE"],
    descriptionShort:
      "Ruokascraper is a price aggregator that helps you save money on groceries in Finnish S- and K-group stores. Paused.",
    descriptionLong:
      "Ruokascraper is a service that helps you save money and time on your groceries. You can input your grocery list and Ruokascraper will find the cheapest deals from K-Group and S-Group stores and sort them into two grocery lists, each for a separate store chain. Currently in development.",
  },
];
