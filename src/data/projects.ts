
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
     {
      id: 4,
    title: "Minders",
    description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
    image: "/imgs/p3.png",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://github.com/Mudassir5620/Minders",
      live: "https://minders-sigma.vercel.app/",
    },
  },
  {
    id: 1,
    title: "Py Scrap - Amazon Web Scraper",
    description: "A Python-based scraper using Scrapy to extract product details from Amazon, with MongoDB integration for data storage.",
    image: "/imgs/p4.png",
    tags: ["Python", "Scrapy", "MongoDB", "Data Mining"],
    links: {
      github: "https://github.com/Mudassir5620/Py-Scrap",
      live: "",
    },
  },
  {
    id: 2,
    title: "MSR Tailor Store",
    description: "A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store.",
    image: "/imgs/p1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Mudassir5620/MSR-ITP",
      live: "",
    },
  },
  
 
];
