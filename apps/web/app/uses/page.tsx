/* eslint-disable react/no-unescaped-entities */
import { InView } from "@/components/core/in-view";
import { Section, SectionProps } from "@/components/ui/section";
import Layout from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Text } from "@workspace/ui/components/text";
import React from "react";

function ToolsSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <ul className='space-y-16' role='list'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href?: string;
  title: string;
}) {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          y: 10,
          scale: 0.98,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
    >
      <Card className='border-none bg-transparent'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Text className='max-w-lg'>{children}</Text>
        </CardContent>
      </Card>
    </InView>
  );
}

function Uses() {
  return (
    <Layout
      description='I get asked a lot about the things I use to build software and stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a full list of all of my favorite stuff.'
      title='Software I use, gadgets I love, and other things I recommend.'
    >
      <div className='absolute inset-0 h-full w-full sm:px-8 lg:px-12'>
        <div className='relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl'>
          <div className='absolute inset-y-0 left-0 hidden h-full border-l sm:block' />
          <div className='absolute inset-y-0 left-full hidden h-full border-l sm:block' />
          <div className='absolute inset-y-0 left-1/3 hidden h-full border-l md:block lg:left-1/3' />
        </div>
      </div>
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title='16” MacBook Pro, M3, 64GB RAM (2024)'>
            I was using an intel-based MacBook Pro 16", then I switched to Mac
            Mini M1. The difference in performance is night and day. With this
            MCP, I can bring it with me anywhere and still have a powerful
            machine. The only bottleneck is not the performance, but my
            thoughts.
          </Tool>
          <Tool title='Apple Studio Display (Standard Glass)'>
            The only display on the market if you want something HiDPI and 27”.
            When you’re working at planetary scale, every pixel you can get
            counts.
          </Tool>
          <Tool title='Apple Magic Keyboard'>
            It might not be the fanciest keyboard, but it’s the one I’m used to,
            and it’s the one I like.
          </Tool>
          <Tool title='Apple Magic Trackpad'>
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title='Herman Miller Aeron Chair'>
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Development tools'>
          <Tool title='Cursor'>
            A better VS Code with neat autocomplete features.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Figma'>
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
          <Tool title='Photoshop'>
            It's the first tool I learned. I rarely use it now, only for
            advanced image editing.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Productivity'>
          <Tool title='Arc'>
            A next-gen web browser with clutter-free interface.
          </Tool>
          <Tool title='Paste Now'>
            I always come back to some code block I wrote a few months ago and I
            know I can find it in Paste Now. Plus, it is one-time purchase.
          </Tool>
          <Tool title='Yoink'>
            Drag and drop files can be a pain, but Yoink makes it easy to manage
            files and folders. Especially when I don't know where I want to put
            them.
          </Tool>
          <Tool title='CleanShot X'>
            A MacOS-look photoshop/video editor screenshot app. Available
            everywhere, whenever you need it. I use it for everything.
          </Tool>
          <Tool title='Raycast'>
            Power user's launcher. I especially love the key-binding feature. I
            get to clean my dock and still have access to all the tools I need.
          </Tool>
        </ToolsSection>
      </div>
    </Layout>
  );
}

export default Uses;
