import imageObservationStudy1 from "@/public/assets/blog/ux-research-drawing-app/observation-study-1.webp";
import imageObservationStudy2 from "@/public/assets/blog/ux-research-drawing-app/observation-study-2.webp";
import imageObservationStudy3 from "@/public/assets/blog/ux-research-drawing-app/observation-study-3.webp";
import imageObservationStudy4 from "@/public/assets/blog/ux-research-drawing-app/observation-study-4.webp";
import imageObservationStudy5 from "@/public/assets/blog/ux-research-drawing-app/observation-study-5.webp";
import imageObservationStudy6 from "@/public/assets/blog/ux-research-drawing-app/observation-study-6.webp";
import imageObservationStudy7 from "@/public/assets/blog/ux-research-drawing-app/observation-study-7.webp";
import imageObservationStudy8 from "@/public/assets/blog/ux-research-drawing-app/observation-study-8.webp";
import imageObservationStudy9 from "@/public/assets/blog/ux-research-drawing-app/observation-study-9.webp";

import { ImageCardSlide, ImageCardType } from "../ImageCard";

const imagesObservationalStudy1: ImageCardType[] = [
  {
    alt: "Circle",
    description: "Sketch with a circle brush",
    src: imageObservationStudy1,
  },
  {
    alt: "Square",
    description: "Sketch with a square brush",
    src: imageObservationStudy2,
  },
  {
    alt: "Ellipse",
    description: "Sketch with an ellipse brush",
    src: imageObservationStudy3,
  },
];
export const ObservationalStudy1 = () => (
  <ImageCardSlide images={imagesObservationalStudy1} />
);

const imagesObservationalStudy2: ImageCardType[] = [
  {
    alt: "Circle",
    description: "Sketch with a circle brush",
    src: imageObservationStudy4,
  },
  {
    alt: "Square",
    description: "Sketch with a square brush",
    src: imageObservationStudy5,
  },
  {
    alt: "Ellipse",
    description: "Sketch with an ellipse brush",
    src: imageObservationStudy6,
  },
];
export const ObservationalStudy2 = () => (
  <ImageCardSlide images={imagesObservationalStudy2} />
);

const imagesObservationalStudy3: ImageCardType[] = [
  {
    alt: "Circle",
    description: "Sketch with a circle brush",
    src: imageObservationStudy7,
  },
  {
    alt: "Square",
    description: "Sketch with a square brush",
    src: imageObservationStudy8,
  },
  {
    alt: "Ellipse",
    description: "Sketch with an ellipse brush",
    src: imageObservationStudy9,
  },
];
export const ObservationalStudy3 = () => (
  <ImageCardSlide images={imagesObservationalStudy3} />
);
