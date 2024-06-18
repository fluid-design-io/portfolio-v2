import { cn } from "@/lib/utils";
import { forwardRef } from "react";

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
    <div className={cn("px-6 sm:px-8", className)} ref={ref} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
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
    <div
      className={cn(
        "relative border-t px-4 backdrop-blur backdrop-brightness-75 sm:px-8 lg:px-12",
        // add virtical safe area padding
        "pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]",
        className,
      )}
      ref={ref}
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
