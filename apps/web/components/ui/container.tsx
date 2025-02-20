import { cn } from "@workspace/ui/lib/utils";
import { forwardRef } from "react";

const GrainFilter = () => {
  return (
    <svg
      id="svgfilters"
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none"
    >
      <defs>
        <filter id="grain">
          <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 0.3 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
};

const OuterContainer = forwardRef(function OuterContainer(
  {
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <main
      id="main"
      className={cn("px-6 sm:px-8", className)}
      ref={ref}
      {...props}
    >
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      <GrainFilter />
    </main>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  {
    children,
    className,
    style,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      className={cn(
        "relative border-t px-4 backdrop-blur backdrop-brightness-[0.4] sm:px-8 lg:px-12",
        // add virtical safe area padding
        "pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]",
        className,
      )}
      ref={ref}
      style={{ filter: "url(#grain)", ...style }}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container: any = forwardRef(function Container(
  { children, ...props }: { children: React.ReactNode },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
