import cardwareScreenshot from "./screenshots/cardware.avif";
import codeArtistScreenshot from "./screenshots/code-artist.avif";
import dragNConvertScreenshot from "./screenshots/drag-n-convert.webp";
import fluidColorsScreenshot from "./screenshots/fluid-colors.avif";
import imageVisionScreenshot from "./screenshots/image-vision.avif";
import matchaLabScreenshot from "./screenshots/matcha-lab.avif";
import nwuiThemeGenScreenshot from "./screenshots/nwui-theme-gen.avif";
import utCompanionScreenshot from "./screenshots/ut-companion.avif";
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
      "Nine matcha drinks, one at a time. An installable iPad web app built as a single non-scrolling screen.",
    link: {
      href: "https://matcha-lab.uing.dev/",
      label: "matcha-lab.uing.dev",
    },
    logo: "/assets/images/matcha-lab.webp",
    name: "Matcha Lab",
    screenshot: matchaLabScreenshot,
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
      "A campus companion for UT Austin. Widgets, quick actions, and a curated directory of campus services.",
    link: {
      href: "https://apps.apple.com/us/app/ut-companion/id6761080156",
      label: "apps.apple.com",
    },
    logo: "/assets/images/ut-companion.webp",
    name: "UT Companion",
    screenshot: utCompanionScreenshot,
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
