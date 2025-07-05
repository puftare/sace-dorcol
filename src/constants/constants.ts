import About from "@/components/About";
// import Menu from "@/components/Menu";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Cocktail } from "@/types/types";

export const cocktails: Cocktail[] = [
  {
    src: "/images/mojito.jpg",
    title: "Mojito",
    description: "Refreshing mix of white rum, lime, mint & soda.",
  },
  {
    src: "/images/martini.jpg",
    title: "Classic Martini",
    description: "Gin and dry vermouth stirred to silky perfection.",
  },
  {
    src: "/images/old-fashioned.jpg",
    title: "Old Fashioned",
    description: "Bourbon with sugar, bitters, and a twist of orange.",
  },
  {
    src: "/images/margarita.jpg",
    title: "Margarita",
    description: "Tequila, lime juice, and triple sec served on the rocks.",
  },
  {
    src: "/images/negroni.jpg",
    title: "Negroni",
    description: "Equal parts gin, Campari, and sweet vermouth.",
  },
  {
    src: "/images/pina-colada.jpg",
    title: "Piña Colada",
    description: "Creamy coconut, pineapple, and rum blended over ice.",
  },
  {
    src: "/images/daiquiri.jpg",
    title: "Daiquiri",
    description: "Rum, fresh lime, and sugar shaken until icy cold.",
  },
  {
    src: "/images/cosmopolitan.jpg",
    title: "Cosmopolitan",
    description:
      "Vodka, cranberry, Cointreau, and lime juice in a chilled glass.",
  },
  {
    src: "/images/manhattan.jpg",
    title: "Manhattan",
    description: "Rye whiskey, sweet vermouth, and a few dashes of bitters.",
  },
  {
    src: "/images/whiskey-sour.jpg",
    title: "Whiskey Sour",
    description: "Whiskey, lemon juice, sugar, and egg white foam.",
  },
  {
    src: "/images/bloody-mary.jpg",
    title: "Bloody Mary",
    description: "Vodka, tomato juice, and a spiced savory blend.",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "Mai Tai",
    description: "Rum, lime juice, orgeat syrup, and orange curaçao.",
  },
];

export const slides = [
  {
    key: "hero",
    content: Hero,
  },
  { key: "about", content: About },
  // { key: "menu", content: Menu },
  // { key: "contact", content: Contact },
];
