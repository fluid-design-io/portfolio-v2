import cardwareScreenshot from "./screenshots/cardware.avif";
import codeArtistScreenshot from "./screenshots/code-artist.avif";
import dragNConvertScreenshot from "./screenshots/drag-n-convert.webp";
import fluidColorsScreenshot from "./screenshots/fluid-colors.avif";
import fluidUIScreenshot from "./screenshots/fluid-ui.avif";
import imageConverterScreenshot from "./screenshots/image-converter.avif";
import imageVisionScreenshot from "./screenshots/image-vision.avif";
import nwuiThemeGenScreenshot from "./screenshots/nwui-theme-gen.avif";
import visionUingScreenshot from "./screenshots/vision-ui.avif";

export type Project = {
  description: string;
  link: { href: string; label: string };
  /**
   * Logos stay in `public/` and are referenced by path. They were `next/image`
   * static imports before; Vite does not fingerprint `public/`, and moving the
   * files is out of scope for this ticket. Screenshots below ARE imported, so
   * Rolldown hashes them and they get immutable cache headers.
   */
  logo: string;
  name: string;
  screenshot: string;
};

export const projects: Project[] = [
  {
    description:
      "Create, preview, and share themes for your iOS, Android, and web apps, with Figma integration.",
    link: {
      href: "https://theme.nativewindui.com/",
      label: "theme.nativewindui.com",
    },
    logo: "/assets/images/nwui.webp",
    name: "NativeWindUI Theme Generator",
    screenshot: nwuiThemeGenScreenshot,
  },
  {
    description:
      "Vision UI is a collection of components that follow the VisionOS design language.",
    link: { href: "https://vision.uing.dev/", label: "vision.uing.dev" },
    logo: "/assets/images/uing.svg",
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
    logo: "/assets/images/drag-n-convert.svg",
    name: "Drag-N-Convert",
    screenshot: dragNConvertScreenshot,
  },
  {
    description:
      "Beautiful React UI that are responsive, supports dark mode and a11y with elegant transitions.",
    link: { href: "https://fluid-design.io", label: "fluid-design.io" },
    logo: "/assets/images/fluid-design.svg",
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
    logo: "/assets/images/fluid-colors.webp",
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
    logo: "/assets/images/image-converter.png",
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
    logo: "/assets/images/code-artist.webp",
    name: "Code Artist",
    screenshot: codeArtistScreenshot,
  },
  {
    description:
      "Oliver's Wedding Photography Website, blazing fast and beautiful.",
    link: { href: "https://image-vision.co", label: "image-vision.co" },
    logo: "/assets/images/image-vision.jpg",
    name: "ImageVision",
    screenshot: imageVisionScreenshot,
  },
  {
    description:
      "A Tokenization-as-a-Service platform that eliminates fraud and gives you full control over your card.",
    link: { href: "https://cardware.com/", label: "cardware.com" },
    logo: "/assets/images/cardware.svg",
    name: "Cardware",
    screenshot: cardwareScreenshot,
  },
];
