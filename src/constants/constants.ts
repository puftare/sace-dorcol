import About from "@/components/About";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import { Cocktail, Drink, NavItem } from "@/types/types";

export const cocktails: Cocktail[] = [
  { src: "/images/mojito.jpg", key: "svinjak" },
  { src: "/images/martini.jpg", key: "quinceSour" },
  { src: "/images/old-fashioned.jpg", key: "ozmo" },
  { src: "/images/margarita.jpg", key: "trisha" },
  { src: "/images/negroni.jpg", key: "gg" },
  { src: "/images/pina-colada.jpg", key: "ginBasil" },
  { src: "/images/daiquiri.jpg", key: "mojito" },
  { src: "/images/cosmopolitan.jpg", key: "siesta" },
  { src: "/images/manhattan.jpg", key: "negroniClassic" },
  { src: "/images/whiskey-sour.jpg", key: "daiquiriClassic" },
  { src: "/images/bloody-mary.jpg", key: "bloodyMary" },
  { src: "/images/mai-tai.jpg", key: "maiTai" },
  { src: "/images/skinny-bitch.jpg", key: "skinnyBitch" },
  { src: "/images/gin-tonic.jpg", key: "ginAndTonic" },
];

export const drinks: Drink[] = [
  { src: "/images/valjevsko-malo.jpg", key: "valjevskoMalo" },
  { src: "/images/valjevsko-veliko.jpg", key: "valjevskoVeliko" },
  { src: "/images/kafa.jpg", key: "coffee" },
  { src: "/images/macha.jpg", key: "matcha" },
  { src: "/images/kafa.jpg", key: "gg" },
  { src: "/images/valjevsko-veliko.jpg", key: "ginBasil" },
  { src: "/images/valjevsko-malo.jpg", key: "mojito" },
  { src: "/images/kafa.jpg", key: "siesta" },
  { src: "/images/manhattan.jpg", key: "negroni" },
  { src: "/images/whiskey-sour.jpg", key: "daiquiri" },
  { src: "/images/bloody-mary.jpg", key: "bloodyMary" },
  { src: "/images/mai-tai.jpg", key: "maiTai" },
  { src: "/images/mai-tai.jpg", key: "skinnyBitch" },
  { src: "/images/mai-tai.jpg", key: "ginAndTonic" },
];

export const slides = [
  {
    key: "hero",
    content: Hero,
  },
  { key: "about", content: About },
  { key: "logo", content: Logo },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/", translationKey: "home" },
  { label: "Cocktails", href: "/cocktails", translationKey: "cocktails" },
  { label: "Drinks", href: "/drinks", translationKey: "drinks" },
];

export const MAIN_PAGE_ANIMATION_CHANGE_DELAY = 5000; // 5 seconds
