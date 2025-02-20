"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const RootSkipNavContent = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createPortal(
    <div className="skip-main-wrap">
      <div className="skip-main flex flex-col gap-1">
        <a className="skip-btn" href="#main">
          Skip to Content
        </a>
      </div>
    </div>,
    // #skip-nav
    document.getElementById("skip-nav")!,
  );
};

export default RootSkipNavContent;
