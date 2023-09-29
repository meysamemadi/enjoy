import { Inter, Roboto_Mono, Montserrat  } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const Messina_Serif = localFont({
  src: "./fonts/MessinaSerif-SemiBold.woff",
  display: "swap",
});

export const brand = localFont({
  src: "./fonts/brand.woff",
  display: "swap",
});

export const harmony = localFont({
  src: "./fonts/Harmony.ttf",
  display: "swap",
});