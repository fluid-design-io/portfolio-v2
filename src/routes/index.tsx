import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/layout/page-layout";
import { ProjectList } from "@/components/projects/project-list";
import { projects } from "@/components/projects/projects.data";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects | Oliver Pan" },
      {
        name: "description",
        content: "Things I've made trying to put my dent in the universe.",
      },
    ],
    // The site root canonical used to live in `__root.tsx`, where it applied to
    // every route. It is correct for this page only.
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Projects() {
  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>
          Things I’ve made trying to put my dent in the universe.
        </PageLayout.Title>
        <PageLayout.Description>
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source.
        </PageLayout.Description>
      </PageLayout.Header>
      <PageLayout.Content>
        {/* The ruled-line overlay. Four hairlines pinned to the grid's own
          edges and column boundaries, so the cards read as cells on paper. */}
        <div className="absolute inset-0 h-full w-full sm:px-8 lg:px-12">
          <div className="relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl">
            <div className="absolute inset-y-0 left-0 hidden h-full border-l sm:block" />
            <div className="absolute inset-y-0 left-full hidden h-full border-l sm:block" />
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-x-0 top-0 hidden w-full border-b sm:block" />
          <div className="absolute inset-x-0 top-full hidden w-full border-b sm:block" />
          <div className="absolute inset-y-0 left-1/2 hidden h-full border-l sm:block lg:left-1/3" />
          <div className="absolute inset-y-0 hidden h-full border-l lg:left-2/3 lg:block" />
          <ProjectList projects={projects} />
        </div>
      </PageLayout.Content>
    </>
  );
}
