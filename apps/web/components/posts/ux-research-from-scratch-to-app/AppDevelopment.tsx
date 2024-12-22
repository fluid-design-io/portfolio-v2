import {
  ImageCardType,
  ThreeRowImageCardSlide,
} from "@/components/posts/ImageCard";
import screenshot1 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-1.webp";
import screenshot2 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-2.webp";
import screenshot3 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-3.webp";
import screenshot4 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-4.webp";
import screenshot5 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-5.webp";
import screenshot6 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-6.webp";
import screenshot7 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-7.webp";
import screenshot8 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-8.webp";
import screenshot9 from "@/public/assets/blog/ux-research-from-scratch-to-app/screenshot-9.webp";

const appScreenshots: ImageCardType[] = [
  {
    alt: "Screenshot 1",
    src: screenshot1,
  },
  {
    alt: "Screenshot 2",
    src: screenshot2,
  },
  {
    alt: "Screenshot 3",
    src: screenshot3,
  },
  {
    alt: "Screenshot 4",
    src: screenshot4,
  },
  {
    alt: "Screenshot 5",
    src: screenshot5,
  },
  {
    alt: "Screenshot 6",
    src: screenshot6,
  },
  {
    alt: "Screenshot 7",
    src: screenshot7,
  },
  {
    alt: "Screenshot 8",

    src: screenshot8,
  },
  {
    alt: "Screenshot 9",
    src: screenshot9,
  },
];

export const AppDevelopment = () => {
  return (
    <div>
      <ThreeRowImageCardSlide
        imageClassName='max-h-screen'
        images={appScreenshots}
      />
    </div>
  );
};
