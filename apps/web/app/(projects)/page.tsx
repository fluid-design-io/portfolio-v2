import Layout from "@/components/layout/layout";

import { Metadata } from "next";
import ProjectList from "./project-list";
import { projects } from "./projects";

export const metadata: Metadata = {
  description: "Things I've made trying to put my dent in the universe.",
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Layout
        description='I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check it out.'
        title='Things I’ve made trying to put my dent in the universe.'
      >
        <div className='absolute inset-0 h-full w-full sm:px-8 lg:px-12'>
          <div className='relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl'>
            <div className='absolute inset-y-0 left-0 hidden h-full border-l sm:block' />
            <div className='absolute inset-y-0 left-full hidden h-full border-l sm:block' />
          </div>
        </div>
        <div className='relative w-full'>
          <div className='absolute inset-x-0 top-0 hidden w-full border-b sm:block' />
          <div className='absolute inset-x-0 top-full hidden w-full border-b sm:block' />
          <div className='absolute inset-y-0 left-1/2 hidden h-full border-l sm:block lg:left-1/3' />
          <div className='absolute inset-y-0 hidden h-full border-l lg:left-2/3 lg:block' />
          <ProjectList projects={projects} />
        </div>
      </Layout>
    </>
  );
}
