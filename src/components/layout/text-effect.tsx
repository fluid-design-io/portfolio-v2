/* oxlint-disable react/no-array-index-key --
   This file's whole job is splitting a fixed string into characters. The list
   never reorders and characters repeat, so position is the only identity a
   character has. There is no data-dependent key to use instead. */
import { motion } from "motion/react";

/**
 * Staggered per-character fade-in, used for the header labels.
 *
 * The original `components/core/text-effects.tsx` carried five presets, a
 * word/char switch, a configurable tag and a `variants` override. The site
 * only ever called it one way — `per="char" preset="fade"` — so this is that
 * one path. Same stagger (0.05s) and same opacity fade, so it looks identical.
 */
export function TextEffect({ children }: { children: string }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      aria-label={children}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
      }}
    >
      {[...children].map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
