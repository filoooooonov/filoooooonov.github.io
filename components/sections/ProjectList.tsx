import kukibitImg from "@/public/kukibit_img.png";
import ruokascraperImg from "@/public/ruokascraper.png";
import ikigaiaImg from "@/public/ikigaia.png";
import timelinerImg from "@/public/timeliner_img.png";
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
    title: "Timeliner.",
    image: timelinerImg,
    tags: ["NEXT.JS", "REACT", "TAILWIND", "VERCEL", "SUPABASE"],
    descriptionShort:
      "A place for start-ups and companies to share their stories from day one. In development.",
  },
  {
    title: "Website for IKIGAIA",
    image: ikigaiaImg,
    link: "https://ikigaia.fi",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
    descriptionShort:
      "A portfolio website for IKIGAIA with a strong focus on presentability and professionalism. In development.",
  },
  {
    title: "Portfolio website for Kukibit",
    image: kukibitImg,
    link: "https://kukibit.fi",
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "FIREBASE"],
    descriptionShort:
      "A custom built business portfolio website for Kukibit, an IT services company based in Lappeenranta, Finland. ",
  },
  {
    title: "Ruokascraper",
    image: ruokascraperImg,
    category: "webdev",
    tags: ["NEXT.JS", "REACT", "TAILWIND", "WEB SCRAPING", "FIREBASE"],
    descriptionShort:
      "Ruokascraper is a price aggregator that helps you save money on groceries in Finnish S- and K-group stores. In development.",
    descriptionLong:
      "Ruokascraper is a service that helps you save money and time on your groceries. You can input your grocery list and Ruokascraper will find the cheapest deals from K-Group and S-Group stores and sort them into two grocery lists, each for a separate store chain. Currently in development.",
  },
];
