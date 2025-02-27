import { Fragment } from "react";

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@workspace/ui/components/description-list";
import ServerModal from "@workspace/ui/components/server-modal";

const oss = [
  {
    description: "A JavaScript library for building user interfaces.",
    name: "React",
  },
  {
    description: "Server side rendering for React.",
    name: "Next.js",
  },
  {
    description: "Prematives for building accessible UI components.",
    name: "Radix UI",
  },
  {
    description: "Modern React component library.",
    name: "Shadcn UI",
  },
  {
    description: "A set of simply beautiful open-source icons.",
    name: "Lucide",
  },
  {
    description: "Smooth buttery animations.",
    name: "Framer Motion",
  },
  {
    description: "Next.js MDX solution for documentation.",
    name: "Fumadocs",
  },
  {
    description: "The glue for classnames.",
    name: "clsx",
  },
  {
    description: 'The "correct" way to do CSS.',
    name: "tailwindcss",
  },
];

function FooterCopyright() {
  const year = new Date().getFullYear();
  const copyright = `© ${year} Oliver Pan`;
  return (
    <ServerModal
      description="the following libraries and tools were used to build this website."
      label={copyright}
      title="Thanks to..."
    >
      <DescriptionList className="px-6">
        {oss.map((item) => (
          <Fragment key={item.name}>
            <DescriptionTerm>{item.name}</DescriptionTerm>
            <DescriptionDetails>{item.description}</DescriptionDetails>
          </Fragment>
        ))}
      </DescriptionList>
    </ServerModal>
  );
}

export default FooterCopyright;
