/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "./projects";
import ProjectCard from "./project-card";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import scanLine from "@/public/assets/images/scanline-dark.png";
import { cn } from "@workspace/ui/lib/utils";

function ProjectList({ projects }: { projects: Project[] }) {
  // Store multiple overlays in state so they re-render in the UI
  const [activeOverlays, setActiveOverlays] = useState<number[]>([]);
  // Use a ref for lastShown, so updating it does NOT cause re-renders
  const lastShownRef = useRef<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

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

  // only runs on desktop
  useEffect(() => {
    if (isHovered || !isDesktop) {
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
      }, 5500);
    };

    // Show immediately once
    runOverlayCycle();

    // Repeat every 6 seconds
    const interval = setInterval(runOverlayCycle, 7000);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (showTimeout) clearTimeout(showTimeout);
    };
  }, [isHovered, isDesktop, projects]);
  return (
    <ul
      className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 lg:grid-cols-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-${index}`}
          project={project}
          isActive={activeOverlays.includes(index)}
        />
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
  );
}

export default ProjectList;
