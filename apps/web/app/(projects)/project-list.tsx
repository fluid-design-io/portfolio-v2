/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "./projects";
import Image from "next/image";
import { Heading } from "@workspace/ui/components/heading";
import Link from "next/link";
import { Text } from "@workspace/ui/components/text";
import { cn } from "@workspace/ui/lib/utils";

function ProjectList({ projects }: { projects: Project[] }) {
  // Store multiple overlays in state so they re-render in the UI
  const [activeOverlays, setActiveOverlays] = useState<number[]>([]);
  // Use a ref for lastShown, so updating it does NOT cause re-renders
  const lastShownRef = useRef<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Helper to pick random unique indices
  const pickRandomIndices = (count: number, exclude: number[] = []) => {
    // Start with all possible indices, excluding any in `exclude`.
    let eligible = projects
      .map((_, i) => i)
      .filter((i) => !exclude.includes(i));

    // If not enough to pick from, just use all
    if (eligible.length < count) {
      eligible = projects.map((_, i) => i);
    }

    // Shuffle and pick the requested count
    const picked: number[] = [];
    while (picked.length < count && eligible.length > 0) {
      const randomIndex = Math.floor(Math.random() * eligible.length);
      picked.push(eligible[randomIndex] as number);
      eligible.splice(randomIndex, 1);
    }

    return picked;
  };

  useEffect(() => {
    if (isHovered) {
      // Hide all overlays and skip the cycle
      setActiveOverlays([]);
      return;
    }

    let showTimeout: ReturnType<typeof setTimeout> | null = null;

    const runOverlayCycle = () => {
      // e.g. 25% of total projects
      const pickCount = Math.ceil(projects.length * 0.25);
      // Exclude lastShownRef.current from the new picks
      const newOverlays = pickRandomIndices(pickCount, lastShownRef.current);

      setActiveOverlays(newOverlays);
      // Update the ref to remember this batch
      lastShownRef.current = newOverlays;

      // Hide overlays after 3 seconds
      showTimeout = setTimeout(() => {
        setActiveOverlays([]);
      }, 3000);
    };

    // Show immediately once
    runOverlayCycle();

    // Repeat every 6 seconds
    const interval = setInterval(runOverlayCycle, 6000);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (showTimeout) clearTimeout(showTimeout);
    };
  }, [isHovered, projects]);
  return (
    <ul
      className='grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {projects.map((project, index) => (
        <li
          className='group relative -mx-4 flex flex-col justify-end px-8 py-8 sm:mx-auto sm:aspect-square sm:p-6'
          key={project.name}
          role='listitem'
        >
          {/* 
            This <div> is the overlay container for each item.
            We fade in if index is in activeOverlays.
          */}
          <div
            className={cn(
              "absolute inset-0 z-[11] bg-background/80 backdrop-blur-xl",
              "transition-opacity duration-300",
              activeOverlays.includes(index) ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              alt={project.name}
              className='h-full w-full object-contain'
              src={project.screenshot}
              unoptimized
            />
          </div>

          {/* Normal project listing content */}
          <div>
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
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
