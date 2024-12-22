import {
  ImageCardType,
  ThreeRowImageCardSlide,
} from "@/components/posts/ImageCard";
import imageInteractionSketch1 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-1.webp";
import imageInteractionSketch2 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-2.webp";
import imageInteractionSketch3 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-3.webp";
import imageInteractionSketch4 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-4.webp";
import imageInteractionSketch5 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-5.webp";
import imageInteractionSketch6 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-6.webp";
import imageInteractionSketch7 from "@/public/assets/blog/ux-research-hiking-app/interaction-sketch-7.webp";

export const InteractionSketchCards = () => {
  const images: ImageCardType[] = [
    {
      alt: "Interaction sketch idea 1",
      src: imageInteractionSketch1,
    },
    {
      alt: "Interaction sketch idea 2",
      src: imageInteractionSketch2,
    },
    {
      alt: "Interaction sketch idea 3",
      src: imageInteractionSketch3,
    },
    {
      alt: "Interaction sketch idea 4",
      src: imageInteractionSketch4,
    },
    {
      alt: "Interaction sketch idea 5",
      src: imageInteractionSketch5,
    },
    {
      alt: "Interaction sketch idea 5",
      src: imageInteractionSketch5,
    },
    {
      alt: "Interaction sketch idea 6",
      src: imageInteractionSketch6,
    },
    {
      alt: "Interaction sketch idea 7",
      src: imageInteractionSketch7,
    },
  ];
  return (
    <ThreeRowImageCardSlide imageClassName='max-h-[14rem]' images={images} />
  );
};
