import { prefix } from "@/constants";

export interface Speaker {
  name: string;
  affiliation: string;
  quote: string;
  img: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "김정",
    affiliation: "코드스쿼드 / CodeSquad",
    quote: "visionOS 시대를 준비하기 위한 Human-Space Interface",
    img: `${prefix}/assets/2024/images/speaker/JungKim.webp`,
  },
  {
    name: "조수환",
    affiliation: "비바리퍼블리카 / Viva Republica",
    quote: "모두를 위한 Swift 6(Swift 6 for all)",
    img: `${prefix}/assets/2024/images/speaker/SuhwanCho.webp`,
  },
  {
    name: "Kohki Miki",
    affiliation: "LY Corporation",
    quote: "Building Intuitive Developer Tools in Swift",
    img: `${prefix}/assets/2024/images/speaker/Miki.webp`,
  },
  {
    name: "Rudrank Riyam",
    affiliation: "ㅤ",
    quote: "Widgets, Widgets Everywhere and Not a Pixel to Spare",
    img: `${prefix}/assets/2024/images/speaker/Riyam.webp`,
  },
  {
    name: "김수빈",
    affiliation: "비바리퍼블리카 / Viva Republica",
    quote: "macOS 자동화의 A to Z",
    img: `${prefix}/assets/2024/images/speaker/SubinKim.webp`,
  },
  {
    name: "윤용운",
    affiliation: "ㅤ",
    quote: "Welcome to the World of Ownership :)",
    img: `${prefix}/assets/2024/images/speaker/YongunYun.webp`,
  },
  {
    name: "조상호",
    affiliation: "플리토 / Flitto",
    quote: "당신의 View가 버벅이는 이유 (feat. Instruments)",
    img: `${prefix}/assets/2024/images/speaker/SanghoCho.webp`,
  },
  {
    name: "Cristian Díaz",
    affiliation: "ㅤ",
    quote: "Exploring Accessible Spatial Interactions",
    img: `${prefix}/assets/2024/images/speaker/Diaz.webp`,
  },
  {
    name: "Pavel Zak",
    affiliation: "ㅤ",
    quote: "The magic of SwiftUI animations",
    img: `${prefix}/assets/2024/images/speaker/Zak.webp`,
  },
  {
    name: "Riana Soumi",
    affiliation: "DeNA",
    quote: "Unit testing with Swift Testing",
    img: `${prefix}/assets/2024/images/speaker/Soumi.webp`,
  },
];
