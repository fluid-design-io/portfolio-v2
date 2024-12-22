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
    description: "The Content & Documentation SDK for React",
    name: "MDXTS",
  },
  {
    description: "Making code snippets pretty.",
    name: "shikiji",
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
  return (
    <ServerModal
      description='the following libraries and tools were used to build this website.'
      label='&copy; 2024 Oliver Pan'
      title='Thanks to...'
    >
      <DescriptionList className='px-6'>
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
