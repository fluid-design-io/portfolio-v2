"use client";

import Spline, { SPEObject } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function CanvasListener() {
  const stage_home = useRef<SPEObject>();
  const stage_active = useRef<SPEObject>();
  const pathname = usePathname();
  const [splineLoaded, setSplineLoaded] = useState(false);

  function onLoad(spline: Application) {
    const obj_home = spline.findObjectByName("Stage_Home");
    const obj_active = spline.findObjectByName("Stage_Active");

    if (!obj_home || !obj_active) {
      return;
    }
    stage_home.current = obj_home;
    stage_active.current = obj_active;
    setSplineLoaded(true); // Set the state to true when the spline is loaded
  }

  useEffect(() => {
    if (splineLoaded && stage_home.current && stage_active.current) {
      if (pathname === "/") {
        stage_home.current.emitEvent("mouseDown");
      } else {
        stage_active.current.emitEvent("mouseDown");
      }
    }
  }, [pathname, splineLoaded]);

  return (
    <Spline
      className="fixed inset-0 isolate z-[-1] !h-[100lvh] !w-[100lvw]"
      id="bg-canvas"
      onLoad={(e) => onLoad(e)}
      scene="https://prod.spline.design/4XwQXD0j54nU8fc4/scene.splinecode"
    />
  );
}

export default CanvasListener;
