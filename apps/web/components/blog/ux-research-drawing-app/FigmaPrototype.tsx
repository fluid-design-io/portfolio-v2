import imagePrototype1 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-1.webp";
import imagePrototype2 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-2.webp";
import imagePrototype3 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-3.webp";
import imagePrototype4 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-4.webp";
import imagePrototype5 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-5.webp";
import imagePrototype6 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-6.webp";
import imagePrototype7 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-7.webp";
import imagePrototype8 from "@/public/assets/blog/ux-research-drawing-app/figma-prototype-8.webp";

import { ImageCardType, ThreeRowImageCardSlide } from "../ImageCard";

const images: ImageCardType[] = [
  {
    alt: "Home Page",
    description: "Home Page",
    src: imagePrototype1,
  },
  {
    alt: "Templates Page",
    description: "Templates Page",
    src: imagePrototype2,
  },
  {
    alt: "Canvas",
    description: "Canvas",
    src: imagePrototype3,
  },
  {
    alt: "Color Picker",
    description: "Color Picker",
    src: imagePrototype4,
  },
  {
    alt: "Finish",
    description: "Finish",
    src: imagePrototype5,
  },
  {
    alt: "Portfolio Page",
    description: "Portfolio Page",
    src: imagePrototype6,
  },
  {
    alt: "Sharing to community",
    description: "Sharing to community",
    src: imagePrototype7,
  },
  {
    alt: "Popular artwork detail",
    description: "Popular artwork detail",
    src: imagePrototype8,
  },
];

export const FigmaPrototype = () => {
  return <ThreeRowImageCardSlide images={images} />;
};
