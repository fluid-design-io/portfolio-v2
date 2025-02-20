import logoCodeArtist from "@/public/assets/images/code-artist.webp";
import logoFluidColors from "@/public/assets/images/fluid-colors.webp";
import logoFluidDesign from "@/public/assets/images/fluid-design.svg";
import logoDragNConvert from "@/public/assets/images/drag-n-convert.svg";
import logoPixeldisplay from "@/public/assets/images/pixeldisplay.webp";
import logoCardware from "@/public/assets/images/cardware.svg";
import logoUing from "@/public/assets/images/uing.svg";
import logoImageVision from "@/public/assets/images/image-vision.jpg";
import logoImageConverter from "@/public/assets/images/image-converter.png";

import cardwareScreenshot from "./screenshots/cardware.avif";
import codeArtistScreenshot from "./screenshots/code-artist.avif";
import fluidColorsScreenshot from "./screenshots/fluid-colors.avif";
import fluidUIScreenshot from "./screenshots/fluid-ui.avif";
import pixeldisplayScreenshot from "./screenshots/pixeldisplay.avif";
import visionUingScreenshot from "./screenshots/vision-ui.avif";
import imageVisionScreenshot from "./screenshots/image-vision.avif";
import imageConverterScreenshot from "./screenshots/image-converter.avif";
import dragNConvertScreenshot from "./screenshots/drag-n-convert.webp";

export const projects = [
  {
    description:
      "Vision UI is a collection of components that follow the VisionOS design language.",
    link: { href: "https://vision.uing.dev/", label: "vision.uing.dev" },
    logo: logoUing,
    name: "Vision UI",
    screenshot: visionUingScreenshot,
  },
  {
    description:
      "An elegant and fast image converter for macOS, natively built with SwiftUI.",
    link: {
      href: "https://drag-n-convert.vercel.app",
      label: "drag-n-convert.vercel.app",
    },
    logo: logoDragNConvert,
    name: "Drag-N-Convert",
    screenshot: dragNConvertScreenshot,
  },
  {
    description:
      "Beautiful React UI that are responsive, supports dark mode and a11y with elegant transitions.",
    link: { href: "https://fluid-design.io", label: "fluid-design.io" },
    logo: logoFluidDesign,
    name: "Fluid UI",
    screenshot: fluidUIScreenshot,
  },
  {
    description:
      "A scientific approach to color palettes that are accessible, beautiful and easy to use.",
    link: {
      href: "https://fluid-colors.vercel.app",
      label: "fluid-colors.vercel.app",
    },
    logo: logoFluidColors,
    name: "Fluid Color",
    screenshot: fluidColorsScreenshot,
  },
  {
    description:
      "Modern image processing tools built with TypeScript and Sharp, Mac & VSCode.",
    link: {
      href: "https://github.com/fluid-design-io/image-converter",
      label: "github.com",
    },
    logo: logoImageConverter,
    name: "Image Converter",
    screenshot: imageConverterScreenshot,
  },
  {
    description:
      "Drawing beautiful art through code. A collection of generative art projects.",
    link: {
      href: "https://code-artist.vercel.app/",
      label: "code-artist.vercel.app",
    },
    logo: logoCodeArtist,
    name: "Code Artist",
    screenshot: codeArtistScreenshot,
  },
  {
    description:
      "Oliver's Wedding Photography Website, blazing fast and beautiful.",
    link: {
      href: "https://image-vision.co",
      label: "image-vision.co",
    },
    logo: logoImageVision,
    name: "ImageVision",
    screenshot: imageVisionScreenshot,
  },
  {
    description:
      "A technology company that focuses on building safe displays for the future.",
    link: {
      href: "https://pixeldisplay.com/",
      label: "pixeldisplay.com",
    },
    logo: logoPixeldisplay,
    name: "Pixel Display",
    screenshot: pixeldisplayScreenshot,
  },
  {
    description:
      "A Tokenization-as-a-Service platform that eliminates fraud and gives you full control over your card.",
    link: {
      href: "https://cardware.com/",
      label: "cardware.com",
    },
    logo: logoCardware,
    name: "Cardware",
    screenshot: cardwareScreenshot,
  },
];

export type Project = (typeof projects)[number];
