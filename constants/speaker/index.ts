import { prefix } from "@/constants";

export interface Speaker {
  name: string;
  affiliation: string;
  ko_quote: string;
  en_quote: string;
  img: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "김정",
    affiliation: "코드스쿼드 / CodeSquad",
    ko_quote: `visionOS 시대를 준비하기 위한\nHuman-Space Interface`,
    en_quote: "Human-Space Interface for the visionOS Era",
    img: `${prefix}/assets/2024/images/speaker/JungKim.webp`,
  },
  {
    name: "조수환",
    affiliation: "비바 리퍼블리카 / Viva Republica",
    ko_quote: "모두를 위한 Swift 6",
    en_quote: "Swift 6 for all",
    img: `${prefix}/assets/2024/images/speaker/SuhwanCho.webp`,
  },
  {
    name: "Kohki Miki",
    affiliation: "LY Corporation",
    ko_quote: `Swift로 직관적인 개발자 도구 \n만들기`,
    en_quote: "Building Intuitive Developer Tools in Swift",
    img: `${prefix}/assets/2024/images/speaker/Miki.webp`,
  },
  {
    name: "Rudrank Riyam",
    affiliation: "ㅤ",
    ko_quote: `모든 곳에 위젯을 배치하고 \n한 픽셀도 남기지 않기`,
    en_quote: "Widgets, Widgets Everywhere and Not a Pixel to Spare",
    img: `${prefix}/assets/2024/images/speaker/Riyam.webp`,
  },
  {
    name: "김수빈",
    affiliation: "당근 / Daangn Inc.",
    ko_quote: "macOS 자동화의 A to Z",
    en_quote: "The A to Z of macOS Automation",
    img: `${prefix}/assets/2024/images/speaker/SubinKim.webp`,
  },
  // {
    // name: "윤용운",
    // affiliation: "ㅤ",
    // quote: "Welcome to the World of Ownership :)",
    // img: `${prefix}/assets/2024/images/speaker/YongunYun.webp`,
  // },
  {
    name: "조상호",
    affiliation: "플리토 / Flitto",
    ko_quote: `당신의 View가 버벅이는 이유 \n(feat. Instruments)`,
    en_quote: "Why Your View Is Stuttering (feat. instruments)",
    img: `${prefix}/assets/2024/images/speaker/SanghoCho.webp`,
  },
  {
    name: "Cristian Díaz",
    affiliation: "ㅤ",
    ko_quote: `접근성을 위한 공간 인터랙션 \n탐색하기`,
    en_quote: "Exploring Accessible Spatial Interactions",
    img: `${prefix}/assets/2024/images/speaker/Diaz.webp`,
  },
  {
    name: "Pavel Zak",
    affiliation: "ㅤ",
    ko_quote: "SwiftUI 애니메이션의 마법",
    en_quote: "The magic of SwiftUI animations",
    img: `${prefix}/assets/2024/images/speaker/Zak.webp`,
  },
  {
    name: "Riana Soumi",
    affiliation: "DeNA",
    ko_quote: `Swift Testing 만나보기: \niOS 개발자의 테스트 방식 변화`,
    en_quote: "Meet Swift Testing: Transforming the Way iOS Developers Test",
    img: `${prefix}/assets/2024/images/speaker/Soumi.webp`,
  },
];
