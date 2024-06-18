"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CodeBlockProps = {
  children: React.ReactNode;
};

export function CodeBlock({ children }: CodeBlockProps) {
  const [showCopy, setShowCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(
      extractText(children as React.ReactElement),
    );

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <pre
      className="relative mx-auto max-w-3xl"
      onBlur={() => setShowCopy(false)}
      onFocus={() => setShowCopy(true)}
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      {showCopy && (
        <button
          className="dark:bg-slate-800 absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded bg-white"
          disabled={isCopied}
          onClick={copy}
        >
          {isCopied ? (
            <Check
              aria-label="Copied"
              className="dark:text-accent-dark h-6 w-6 animate-pulse text-accent"
            />
          ) : (
            <Copy
              aria-label="Copy code"
              className="dark:text-slate-600 dark:hover:text-accent-dark h-6 w-6 text-slate-300 hover:text-accent"
            />
          )}
        </button>
      )}
      {children}
    </pre>
  );
}

/**
 * Extracts the text from a ReactElement
 */
const extractText = (element: React.ReactElement | string): string => {
  // If the element is a string, return it
  if (typeof element === "string") {
    return element;
  }

  // If the element is a ReactElement, check if it has children
  // If the children is a single string, return it
  if (typeof element.props.children === "string") {
    return element.props.children;
  }

  // If the children is an array, map over it and extract the text
  if (Array.isArray(element.props.children)) {
    return (element.props.children as (React.ReactElement | string)[])
      .map((child) => extractText(child))
      .join("");
  }

  // If the children is an object (ReactElement), extract the text from it recursively
  if (typeof element.props.children === "object") {
    return extractText(element.props.children);
  }

  return "";
};
