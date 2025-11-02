
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "2nd Place - E-Wast Competition",
    type: "competition",
    year: "2024",
    description: "Secured second place in the competitive E-Wast event.",
    icon: Trophy,
  }
];
