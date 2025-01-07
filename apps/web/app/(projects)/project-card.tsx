"use client";

import Image from "next/image";
import { Heading } from "@workspace/ui/components/heading";
import Link from "next/link";
import { Text } from "@workspace/ui/components/text";
import { cn } from "@workspace/ui/lib/utils";
import { Project } from "./projects";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

function ProjectCard({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -400px 0px" });
  const isReduceMotion = useReducedMotion();
  const defaultVariants = {
    hidden: {
      opacity: 0,
      scale: isReduceMotion ? 1 : 0.95,
      filter: isReduceMotion ? undefined : isDesktop ? "blur(10px)" : undefined, // Optimize for mobile
      transition: { duration: 1, type: "spring", bounce: 0 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: isDesktop ? "blur(0px)" : undefined,
      transition: { duration: 1.75, type: "spring", bounce: 0.08 },
    },
  };
  return (
    <li
      className='group relative -mx-4 flex flex-col justify-end px-8 py-8 sm:mx-auto sm:aspect-square sm:p-6'
      key={project.name}
      role='listitem'
    >
      <motion.div
        ref={ref}
        initial='hidden'
        variants={defaultVariants}
        animate={
          isDesktop
            ? isActive
              ? "visible"
              : "hidden"
            : isInView
              ? "hidden"
              : "visible"
        }
        className={cn(
          "absolute inset-[0.75px] z-[11] bg-background pointer-events-none"
        )}
      >
        <Image
          alt={project.name}
          className='h-full w-full object-contain'
          src={project.screenshot}
          unoptimized
        />
      </motion.div>

      {/* Normal project listing content */}
      <motion.div
        variants={{
          ...defaultVariants,
          hidden: {
            ...defaultVariants.hidden,
            scale: isReduceMotion ? 1 : 1.12,
          },
        }}
        animate={
          isDesktop
            ? isActive
              ? "hidden"
              : "visible"
            : isInView
              ? "visible"
              : "hidden"
        }
      >
        <div className='relative z-10 mb-2 flex size-12 items-center justify-center rounded-full border border-border/50 bg-background/40'>
          <Image
            alt=''
            className='h-8 w-8 rounded-full'
            src={project.logo}
            unoptimized
          />
        </div>
        <Heading level={2}>
          <Link
            href={project.link.href}
            rel='noopener noreferrer'
            target='_blank'
          >
            {project.name}
            <span className='absolute inset-0' />
          </Link>
        </Heading>
        <Text className='mt-2 line-clamp-3 min-h-[80px]'>
          {project.description}
        </Text>
        <Text className='relative z-10 mt-6 flex flex-row items-center transition group-hover:text-lime-500'>
          <svg
            className='size-4 opacity-35'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z'
            />
          </svg>
          <span className='ml-1.5'>{project.link.label}</span>
        </Text>
      </motion.div>
    </li>
  );
}

export default ProjectCard;
