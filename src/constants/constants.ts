import { MenuItem } from "@/types/types";
import About from "@/components/About";
import Menu from "@/components/Menu";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export const ITEMS: MenuItem[] = [
  {
    name: "Valjevsko pivo 0.33L",
    price: "RSD 280",
    description: "Valjevo's finest beer, 0.33L.",
  },
  {
    name: "Coctail GG",
    price: "RSD 720",
    description: "Vodka, mint & neon tonic.",
  },
  {
    name: "Drozli Kombuha",
    price: "RSD 440",
    description: "KOMBUCHA with a twist of ginger and lemon.",
  },
  {
    name: "Valjevsko pivo 0.5L",
    price: "RSD 360",
    description: "Valjevo's finest beer, 0.5L.",
  },
  {
    name: "Coctail Svinjak",
    price: "RSD 720",
    description: "Vinjak, mint & nettle syrup.",
  },
];

export const slides = [
  {
    key: "hero",
    content: Hero,
  },
  { key: "about", content: About },
  { key: "menu", content: Menu },

  // { key: "contact", content: Contact },
];
