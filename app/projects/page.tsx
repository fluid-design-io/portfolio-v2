import Layout from "@/components/layout/layout";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import logoCodeArtist from "@/public/assets/images/code-artist.webp";
import logoFluidColors from "@/public/assets/images/fluid-colors.webp";
import logoFluidDesign from "@/public/assets/images/fluid-design.svg";
import logoPixeldisplay from "@/public/assets/images/pixeldisplay.webp";
import logoCardware from "@/public/assets/images/cardware.svg";
import scanLine from "@/public/assets/images/scanline-dark.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    description:
      "Beautiful React UI that are responsive, supports dark mode and a11y with elegant transitions.",
    link: { href: "https://fluid-design.io/", label: "fluid-design.io" },
    logo: logoFluidDesign,
    name: "Fluid UI",
  },
  {
    description:
      "A scientific approach to color palettes that are accessible, beautiful and easy to use.",
    link: {
      href: "https://fluid-colors.vercel.app/",
      label: "fluid-colors.vercel.app",
    },
    logo: logoFluidColors,
    name: "Fluid Color",
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
  },
];

export const metadata: Metadata = {
  description: "Things I've made trying to put my dent in the universe.",
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Layout
        description="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check it out."
        title="Things I’ve made trying to put my dent in the universe."
      >
        <div className="absolute inset-0 h-full w-full sm:px-8 lg:px-12">
          <div className="relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl">
            <div className="absolute inset-y-0 left-0 hidden h-full border-l sm:block" />
            <div className="absolute inset-y-0 left-full hidden h-full border-l sm:block" />
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-x-0 top-0 hidden w-full border-b sm:block" />
          <div className="absolute inset-x-0 top-1/2 hidden w-full border-b sm:block" />
          <div className="absolute inset-x-0 top-full hidden w-full border-b sm:block" />
          <div className="absolute inset-y-0 left-1/2 hidden h-full border-l sm:block lg:left-1/3" />
          <div className="absolute inset-y-0 hidden h-full border-l lg:left-2/3 lg:block" />
          <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                className="group relative -mx-4 flex flex-col justify-end px-8 py-8 sm:mx-auto sm:aspect-square sm:p-6"
                key={project.name}
                role="listitem"
              >
                <div>
                  <div className="relative z-10 mb-2 flex size-12 items-center justify-center rounded-full border border-border/50 bg-background/40">
                    <Image
                      alt=""
                      className="h-8 w-8 rounded-full"
                      src={project.logo}
                      unoptimized
                    />
                  </div>
                  <Heading level={2}>
                    <Link
                      href={project.link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.name}
                      <span className="absolute inset-0" />
                    </Link>
                  </Heading>
                  <Text className="mt-2 line-clamp-3 min-h-[80px]">
                    {project.description}
                  </Text>
                  <Text className="relative z-10 mt-6 flex flex-row items-center transition group-hover:text-lime-500">
                    <svg
                      className="size-4 opacity-35"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                      <path
                        clipRule="evenodd"
                        d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>

                    <span className="ml-1.5">{project.link.label}</span>
                  </Text>
                </div>
              </li>
            ))}
            <li aria-hidden="true" className="relative bg-white/[0.03]">
              <div
                className={cn(
                  "absolute inset-0 z-0",
                  "h-full w-full",
                  "bg-repeat",
                  "opacity-[0.5]",
                  "z-0",
                )}
                style={{
                  content: "",
                  backgroundImage: `url(${scanLine.src})`,
                }}
              />
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
