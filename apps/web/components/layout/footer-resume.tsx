import logoCardPlus from "@/public/assets/images/card-plus.svg";
import logoCardWare from "@/public/assets/images/cardware.svg";
import logoCisco from "@/public/assets/images/cisco.svg";
import logoSvg from "@/public/assets/images/svg.svg";
import logoBerkeley from "@/public/assets/images/berkeley.svg";
import logoImageVision from "@/public/assets/images/image-vision.svg";
import logoOhlone from "@/public/assets/images/ohlone.svg";
import Image from "next/image";
import { Fragment } from "react";

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@workspace/ui/components/description-list";
import { Heading } from "@workspace/ui/components/heading";
import { Text } from "@workspace/ui/components/text";
import ServerModal from "@workspace/ui/components/server-modal";

export type DateType = { dateTime: string; label: string } | string;
export type ResumeType = {
  company: string;
  end: DateType;
  logo: string;
  start: DateType;
  title: string;
};
export type EducationType = {
  degree: string;
  end: DateType;
  logo: string;
  school: string;
  start: DateType;
};

const resume: ResumeType[] = [
  {
    company: "Image Vision",
    end: {
      dateTime: new Date().getFullYear().toString(),
      label: "Present",
    },
    logo: logoImageVision,
    start: "2019",
    title: "CEO",
  },
  {
    company: "CardWare, Inc.",
    end: {
      dateTime: new Date().getFullYear().toString(),
      label: "Present",
    },
    logo: logoCardWare,
    start: "2023",
    title: "UX/UI Designer",
  },
  {
    company: "Cisco",
    end: "2023",
    logo: logoCisco,
    start: "2017",
    title: "Wireless Innovation team",
  },
  {
    company: "Card Plus",
    end: "2016",
    logo: logoCardPlus,
    start: "2014",
    title: "Graphic Designer",
  },
  {
    company: "Silicon Valley Global",
    end: "2016",
    logo: logoSvg,
    start: "2015",
    title: "Graphic Web Designer",
  },
];

const education: EducationType[] = [
  {
    degree: "Bachelor of Fine Arts - BFA",
    end: "2023",
    logo: logoBerkeley,
    school: "University of California, Berkeley",
    start: "2021",
  },
  {
    degree: "Associate of Arts - AA",
    end: "2021",
    logo: logoOhlone,
    school: "Ohlone College",
    start: "2018",
  },
];

function FooterResume() {
  return (
    <ServerModal
      description="Where I've been and what I've done."
      label="Resumé"
      title="Resumé"
    >
      <DescriptionList className="px-6">
        {resume.map((role) => (
          <Fragment key={role.title}>
            <DescriptionTerm className="space-y-8">
              <Heading className="text-pretty" level={4}>
                {role.company}
              </Heading>
              <div className="dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <Image
                  alt={role.company}
                  className="h-7 w-7 rounded-full object-cover"
                  src={role.logo}
                  unoptimized
                />
              </div>
            </DescriptionTerm>
            <DescriptionDetails
              aria-label={`${
                (typeof role.start === "object" && role.start.label) ||
                role.start
              } until ${
                (typeof role.end === "object" && role.end.label) || role.end
              }`}
              className="flex flex-col justify-end"
            >
              <Text>{role.title}</Text>
              <Text>
                <time
                  dateTime={
                    (typeof role.start === "object" && role.start.dateTime) ||
                    (role.start as string)
                  }
                >
                  {(typeof role.start === "object" && role.start.label) ||
                    (role.start as string)}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time
                  dateTime={
                    (typeof role.end === "object" && role.end.dateTime) ||
                    (role.end as string)
                  }
                >
                  {(typeof role.end === "object" && role.end.label) ||
                    (role.end as string)}
                </time>
              </Text>
            </DescriptionDetails>
          </Fragment>
        ))}

        {education.map((school) => (
          <Fragment key={school.school}>
            <DescriptionTerm className="space-y-8">
              <Heading className="text-pretty" level={4}>
                {school.school}
              </Heading>
              <div className="dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <Image
                  alt={school.school}
                  className="h-7 w-7 rounded-full object-cover"
                  src={school.logo}
                  unoptimized
                />
              </div>
            </DescriptionTerm>
            <DescriptionDetails
              aria-label={`${
                (typeof school.start === "object" && school.start.label) ||
                school.start
              } until ${
                (typeof school.end === "object" && school.end.label) ||
                school.end
              }`}
              className="flex flex-col justify-end"
            >
              <Text>{school.degree}</Text>
              <Text>
                <time
                  dateTime={
                    (typeof school.start === "object" &&
                      school.start.dateTime) ||
                    (school.start as string)
                  }
                >
                  {(typeof school.start === "object" && school.start.label) ||
                    (school.start as string)}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time
                  dateTime={
                    (typeof school.end === "object" && school.end.dateTime) ||
                    (school.end as string)
                  }
                >
                  {(typeof school.end === "object" && school.end.label) ||
                    (school.end as string)}
                </time>
              </Text>
            </DescriptionDetails>
          </Fragment>
        ))}
      </DescriptionList>
    </ServerModal>
  );
}

export default FooterResume;
