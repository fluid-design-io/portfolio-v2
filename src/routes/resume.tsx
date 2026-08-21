import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/ui/description-list";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SITE_URL } from "@/lib/site";

const TITLE = "Resumé";
const DESCRIPTION = "Where I’ve been and what I’ve done.";

export const Route = createFileRoute("/resume")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Resumé | Oliver Pan" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Resumé | Oliver Pan" },
      { property: "og:description", content: DESCRIPTION },
      { content: `${SITE_URL}/resume`, property: "og:url" },
    ],
    links: [{ href: `${SITE_URL}/resume`, rel: "canonical" }],
  }),
});

/**
 * A year, or a year that is still running.
 *
 * The object form exists so an entry can print "Present" while `<time>` still
 * carries a machine-readable year. `main` spelled that out with an inline
 * `typeof x === "object" && ...` ternary in six places; `datetime()` and
 * `label()` below hold the same rule in one.
 */
type ResumeDate = string | { dateTime: string; label: string };

function datetime(date: ResumeDate) {
  return typeof date === "string" ? date : date.dateTime;
}

function label(date: ResumeDate) {
  return typeof date === "string" ? date : date.label;
}

const present: ResumeDate = {
  dateTime: new Date().getFullYear().toString(),
  label: "Present",
};

/**
 * `main` had a `ResumeType` and an `EducationType` that differed only in field
 * names — `company`/`title` against `school`/`degree` — and rendered through
 * two byte-identical blocks of JSX. One shape, one `<Entry>`.
 */
type Entry = {
  end: ResumeDate;
  logo: string;
  /** Employer or school. Heads the entry. */
  name: string;
  /** Job title or degree. */
  role: string;
  start: ResumeDate;
};

const roles: Entry[] = [
  {
    end: present,
    logo: "/assets/images/image-vision.svg",
    name: "Image Vision",
    role: "CEO",
    start: "2019",
  },
  {
    end: present,
    logo: "/assets/images/cardware.svg",
    name: "CardWare, Inc.",
    role: "UX/UI Designer",
    start: "2023",
  },
  {
    end: "2023",
    logo: "/assets/images/cisco.svg",
    name: "Cisco",
    role: "Wireless Innovation team",
    start: "2017",
  },
  {
    end: "2016",
    logo: "/assets/images/card-plus.svg",
    name: "Card Plus",
    role: "Graphic Designer",
    start: "2014",
  },
  {
    end: "2016",
    logo: "/assets/images/svg.svg",
    name: "Silicon Valley Global",
    role: "Graphic Web Designer",
    start: "2015",
  },
];

const education: Entry[] = [
  {
    end: "2023",
    logo: "/assets/images/berkeley.svg",
    name: "University of California, Berkeley",
    role: "Bachelor of Fine Arts - BFA",
    start: "2021",
  },
  {
    end: "2021",
    logo: "/assets/images/ohlone.svg",
    name: "Ohlone College",
    role: "Associate of Arts - AA",
    start: "2018",
  },
];

function Resume() {
  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>{TITLE}</PageLayout.Title>
        <PageLayout.Description>{DESCRIPTION}</PageLayout.Description>
      </PageLayout.Header>
      <PageLayout.Content>
        <DescriptionList className="px-6">
          {[...roles, ...education].map((entry) => (
            <Entry entry={entry} key={entry.name} />
          ))}
        </DescriptionList>
      </PageLayout.Content>
    </>
  );
}

function Entry({ entry }: { entry: Entry }) {
  return (
    <Fragment>
      <DescriptionTerm className="space-y-8">
        <Heading className="text-pretty" level={4}>
          {entry.name}
        </Heading>
        <div className="relative mt-1 flex size-10 flex-none items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5">
          {/* Decorative: the name it would announce is the heading above it. */}
          <img
            alt=""
            className="size-7 rounded-full object-cover"
            height={28}
            src={entry.logo}
            width={28}
          />
        </div>
      </DescriptionTerm>
      <DescriptionDetails
        aria-label={`${label(entry.start)} until ${label(entry.end)}`}
        className="flex flex-col justify-end"
      >
        <Text>{entry.role}</Text>
        <Text>
          <time dateTime={datetime(entry.start)}>{label(entry.start)}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={datetime(entry.end)}>{label(entry.end)}</time>
        </Text>
      </DescriptionDetails>
    </Fragment>
  );
}
