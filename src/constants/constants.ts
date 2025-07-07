import About from "@/components/About";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import { Cocktail, Drink, NavItem } from "@/types/types";

export const cocktails: Cocktail[] = [
  {
    src: "/images/mojito.jpg",
    title: "SVINJAK",
    description: "BRANDY, LEMON AND NETTLE SYRUP",
  },
  {
    src: "/images/martini.jpg",
    title: "QUINCE SOUR",
    description: "QUINCE BRANDY, LEMON AND MINT SYRUP",
  },
  {
    src: "/images/old-fashioned.jpg",
    title: "OZMO",
    description: "VODKA, LEMON AND ORANGE SOUR CHERRY SYRUP",
  },
  {
    src: "/images/margarita.jpg",
    title: "TRISHA",
    description: "GIN, LEMON AND CHERRY SYRUP",
  },
  {
    src: "/images/negroni.jpg",
    title: "GG",
    description: "GIN, GRAPE, LEMON AND ELDERFLOWER SYRUP",
  },
  {
    src: "/images/pina-colada.jpg",
    title: "GIN BASIL",
    description: "BASIN, GIN, LEMON AND SYRUP",
  },
  {
    src: "/images/daiquiri.jpg",
    title: "MOJITO",
    description: "RUM, MINT, LIME, SYRUP AND SODA",
  },
  {
    src: "/images/cosmopolitan.jpg",
    title: "SIESTA",
    description: "TEQUILLA, CAMPARI, GRAPEFRUIT, LIME AND SYRUP",
  },
  {
    src: "/images/manhattan.jpg",
    title: "NEGRONI",
    description: "GIN, CAMPARI AND VERMOUTH",
  },
  {
    src: "/images/whiskey-sour.jpg",
    title: "DAIQUIRI",
    description: "RUM, LIME AND SYRUP",
  },
  {
    src: "/images/bloody-mary.jpg",
    title: "WHISKEY SOUR",
    description: "Vodka, tomato juice, and a spiced savory blend.",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "GIN FIZZ",
    description: "GIN, LEMON AND SODA",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "SKINNY BITCH",
    description: "VODKA, LEMON AND SODA",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "GIN & TONIC",
    description: "GIN AND TONIC",
  },
];

export const drinks: Drink[] = [
  {
    src: "/images/valjevsko-malo.jpg",
    title: "VALJEVSKO MALO",
    description: "VALJEVSKO BEER 0.33L",
  },
  {
    src: "/images/valjevsko-veliko.jpg",
    title: "VALJEVSKO VELIKO",
    description: "VALJEVSKO BEER 0.33L",
  },
  {
    src: "/images/kafa.jpg",
    title: "COFFEE",
    description: "ESPRESSO, AMERICANO, CAPPUCCINO, LATTE",
  },
  {
    src: "/images/macha.jpg",
    title: "MATCHA",
    description: "MATCHA LATTE, MATCHA TEA",
  },
  {
    src: "/images/kafa.jpg",
    title: "GG",
    description: "GIN, GRAPE, LEMON AND ELDERFLOWER SYRUP",
  },
  {
    src: "/images/valjevsko-veliko.jpg",
    title: "GIN BASIL",
    description: "BASIN, GIN, LEMON AND SYRUP",
  },
  {
    src: "/images/valjevsko-malo.jpg",
    title: "MOJITO",
    description: "RUM, MINT, LIME, SYRUP AND SODA",
  },
  {
    src: "/images/kafa.jpg",
    title: "SIESTA",
    description: "TEQUILLA, CAMPARI, GRAPEFRUIT, LIME AND SYRUP",
  },
  {
    src: "/images/manhattan.jpg",
    title: "NEGRONI",
    description: "GIN, CAMPARI AND VERMOUTH",
  },
  {
    src: "/images/whiskey-sour.jpg",
    title: "DAIQUIRI",
    description: "RUM, LIME AND SYRUP",
  },
  {
    src: "/images/bloody-mary.jpg",
    title: "WHISKEY SOUR",
    description: "Vodka, tomato juice, and a spiced savory blend.",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "GIN FIZZ",
    description: "GIN, LEMON AND SODA",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "SKINNY BITCH",
    description: "VODKA, LEMON AND SODA",
  },
  {
    src: "/images/mai-tai.jpg",
    title: "GIN & TONIC",
    description: "GIN AND TONIC",
  },
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
