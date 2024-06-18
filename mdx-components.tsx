import {
  CodeBlock,
  type CodeBlockProps,
  MDXComponents,
} from "mdxts/components";
import { PackageInstall } from "mdxts/components/PackageInstall";
import Image from "next/image";
import Link from "next/link";

import { Text } from "./components/ui/text";
import { cn } from "./lib/utils";

const codeBlockStyles = {
  container: {},
  toolbar: {
    padding: "0.8rem 1rem",
  },
} satisfies CodeBlockProps["style"];

/**
 * Use <Link> for internal links and <a> for external links and anchors
 * and open external links in a new tab
 */
function a({ children, href }: React.HTMLProps<HTMLAnchorElement>) {
  if (href && href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }

  if (href && href.startsWith("#")) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}

/**
 * Image component that uses next/image, with optional caption and width/height
 * Example usage: \!\[alt text {{ w: 600, h: 300, cap: "caption text" }}](/path/to/image)
 */
function img({ alt, src, ...rest }: React.HTMLProps<HTMLImageElement>) {
  const _alt = (alt?.split("{")[0].trim() ?? alt) || "";
  const props = alt?.split("{")[1];
  const width = parseInt(props?.match(/w:\s*(\d+)/)?.[1] ?? "700");
  const height = parseInt(props?.match(/h:\s*(\d+)/)?.[1] ?? "400");
  const caption = props?.match(/cap:\s*"(.*?)"/)?.[1];

  return (
    <figure
      aria-label={_alt}
      className="dark:bg-rose-50/25 mx-auto mb-6 mt-3 flex h-fit w-fit flex-col rounded bg-slate-300/20"
    >
      <Image
        alt={_alt}
        className={cn("rounded", caption && "rounded-b-none")}
        height={height}
        src={src || ""}
        width={width}
      />
      {caption && (
        <figcaption
          className={cn(
            "m-0 rounded-b-[3px] px-6 py-1 text-center",
            "bg-slate-300/50 text-slate-700",
            "dark:bg-rose-50/5 dark:text-rose-50",
          )}
          style={{
            maxWidth: width,
          }}
        >
          <Text className="text-balance text-xs">{caption}</Text>
        </figcaption>
      )}
    </figure>
  );
}

export function useMDXComponents() {
  return {
    CodeBlock: (props) => (
      <CodeBlock
        allowErrors
        className={{
          container: "font-mono",
        }}
        sourcePath={false}
        style={codeBlockStyles}
        {...props}
      />
    ),
    Editor: (props) => <div {...props} />,
    Error: (props) => <div {...props} />,
    Example: (props) => <div {...props} />,
    Note: ({ children, ...props }) => (
      <div
        style={{
          backgroundColor: "var(--color-surface-2)",
          border: "1px solid var(--color-separator)",
          borderRadius: "0.5rem",
          display: "grid",
          fontSize: "var(--font-size-body-2)",
          gap: "0.75rem",
          gridTemplateColumns: "auto 1fr",
          lineHeight: "var(--line-height-body-2)",
          margin: "0 -1rem",
          padding: "1em",
        }}
        {...props}
      >
        <svg
          fill="none"
          height="1rem"
          stroke="var(--color-foreground-secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          style={{ marginTop: "0.25rem" }}
          viewBox="0 0 24 24"
          width="1rem"
        >
          <path d="M7.06883 21.6H16.219C18.7973 21.6 20.8879 19.5093 20.8879 16.9312V5.86885C20.8879 3.29074 18.7973 1.20001 16.219 1.20001H7.06883C4.49072 1.20001 2.39999 3.29074 2.39999 5.86885V16.9312C2.39999 19.5093 4.49072 21.6 7.06883 21.6Z" />
          <path d="M15.3946 15.842H7.89178M15.3946 11.245H7.89178M10.755 6.6586H7.89232" />
        </svg>
        <div>{children}</div>
      </div>
    ),
    Outline: (props) => <div {...props} />,
    PackageInstall,
    Playground: ({ codeBlock, ...props }) => {
      return (
        <div style={{ display: "flex" }}>
          <CodeBlock
            className={{
              container: "font-mono",
            }}
            language="tsx"
            style={{
              container: {
                fontSize: "var(--font-size-body-2)",
                lineHeight: "var(--line-height-body-2)",
              },
            }}
            value={codeBlock}
          />
          <div {...props} />
        </div>
      );
    },
    References: (props) => <div {...props} />,
    a,
    code: (props) => (
      <MDXComponents.code className={"font-mono"} paddingY="0" {...props} />
    ),
    img,
    pre: ({ sourcePath, ...props }) => (
      <MDXComponents.pre
        className={{
          container: "font-mono",
        }}
        sourcePath={process.env.NODE_ENV === "development" ? sourcePath : false}
        style={codeBlockStyles}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "var(--font-size-body-2)",
          gap: "1rem",
          padding: "0 0 0 1.4rem",
        }}
        {...props}
      />
    ),
  } satisfies MDXComponents;
}
