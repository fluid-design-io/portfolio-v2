import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { type ReactNode, useId, useRef } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SITE_URL } from "@/lib/site";

const TITLE = "Software I use, gadgets I love, and other things I recommend.";
const DESCRIPTION =
  "I’m often asked which tools I use to build software and stay productive (or to fool myself when I’m actually procrastinating). Here’s a rundown of my favorites.";

export const Route = createFileRoute("/uses")({
  component: Uses,
  head: () => ({
    meta: [
      { title: "Uses | Oliver Pan" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Uses | Oliver Pan" },
      { property: "og:description", content: DESCRIPTION },
      { content: `${SITE_URL}/uses`, property: "og:url" },
    ],
    links: [{ href: `${SITE_URL}/uses`, rel: "canonical" }],
  }),
});

function Uses() {
  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>{TITLE}</PageLayout.Title>
        <PageLayout.Description>{DESCRIPTION}</PageLayout.Description>
      </PageLayout.Header>
      <PageLayout.Content>
        {/* Column rules, positioned against the content well in `PageLayout`. */}
        <div className="absolute inset-0 h-full w-full sm:px-8 lg:px-12">
          <div className="relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl">
            <div className="absolute inset-y-0 left-0 hidden h-full border-l sm:block" />
            <div className="absolute inset-y-0 left-full hidden h-full border-l sm:block" />
            <div className="absolute inset-y-0 left-1/3 hidden h-full border-l md:block" />
          </div>
        </div>
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M3, 64GB RAM (2024)">
              I was using an intel-based MacBook Pro 16”, then I switched to Mac
              Mini M1. The difference in performance is night and day. With this
              MacBook Pro, I can bring it with me anywhere and still have a
              powerful machine. The only bottleneck is not the performance, but
              my thoughts.
            </Tool>
            <Tool title="Apple Studio Display (Standard Glass)">
              The only display on the market if you want something HiDPI and
              27”. When you’re working at planetary scale, every pixel you can
              get counts.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              It might not be the fanciest keyboard, but it’s the one I’m used
              to, and it’s the one I like.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Cursor">
              A better VS Code with neat autocomplete features.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
            <Tool title="Photoshop">
              It’s the first tool I learned. I rarely use it now, only for
              advanced image editing.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Arc">
              A next-gen web browser with clutter-free interface.
            </Tool>
            <Tool title="Paste Now">
              I always come back to some code block I wrote a few months ago and
              I know I can find it in Paste Now. Plus, it is one-time purchase.
            </Tool>
            <Tool title="Yoink">
              Drag and drop files can be a pain, but Yoink makes it easy to
              manage files and folders. Especially when I don’t know where I
              want to put them.
            </Tool>
            <Tool title="CleanShot X">
              A MacOS-look photoshop/video editor screenshot app. Available
              everywhere, whenever you need it. I use it for everything.
            </Tool>
            <Tool title="Raycast">
              Power user’s launcher. I especially love the key-binding feature.
              I get to clean my dock and still have access to all the tools I
              need.
            </Tool>
          </ToolsSection>
        </div>
      </PageLayout.Content>
    </>
  );
}

/**
 * A sticky category heading beside its list of tools.
 *
 * This was `ui/section.tsx` on `main`, a generic `Section` with exactly one
 * caller — this page — which wrapped its children in the `<ul>` at the call
 * site. Folded in, with the list where it belongs. `role="list"` stays: the
 * Tailwind reset strips the marker, and Safari drops list semantics with it.
 */
function ToolsSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const id = useId();

  return (
    <section aria-labelledby={id}>
      <div className="grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-3">
        <Heading
          className="sticky top-6 px-6 text-balance text-shadow-lg md:text-2xl"
          id={id}
          level={2}
        >
          {title}
        </Heading>
        {/* oxlint-disable-next-line jsx-a11y/no-redundant-roles -- redundant
            only on paper: Safari drops list semantics from a `list-style: none`
            list, which Tailwind's reset applies to every `ul`. */}
        <ul className="space-y-16 md:col-span-2" role="list">
          {children}
        </ul>
      </div>
    </section>
  );
}

/**
 * One entry, fading and rising once as it scrolls into view.
 *
 * `components/core/in-view.tsx` on `main` was a generic wrapper around
 * `useInView` whose only caller was this page — the projects grid uses
 * `useInView` directly. So it is not ported; the four lines it saved are here
 * instead. See the ticket 20 answer: ticket 15 is free to delete it.
 *
 * It also rendered a `<div>` straight into a `<ul>`. This is an `<li>`.
 */
function Tool({ children, title }: { children: ReactNode; title: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <motion.li
      animate={isInView ? "visible" : "hidden"}
      initial="hidden"
      ref={ref}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
    >
      <Card className="border-none bg-transparent">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Text className="max-w-lg">{children}</Text>
        </CardContent>
      </Card>
    </motion.li>
  );
}
