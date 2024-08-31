import { cn } from "@/lib/utils";
import React from "react";

import { Container } from "../ui/container";
import { SharpPlus } from "./icons";
import PageHeader, { PageHeaderProps } from "./page-header";

interface LayoutProps extends PageHeaderProps {
  children: React.ReactNode;
}

function Layout({ children, description, title }: LayoutProps) {
  return (
    <>
      <div className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative">
            <div className="mx-auto mt-16 flex h-[max(38vh,350px)] max-w-2xl items-center pb-16 lg:max-w-5xl lg:px-8">
              <PageHeader {...{ description, title }} />
            </div>
            <SharpPlus
              className={cn(
                "absolute -bottom-3 -left-3 z-[2] size-6 text-muted-foreground",
              )}
            />
            <SharpPlus
              className={cn(
                "absolute -bottom-3 -right-3 z-[2] size-6 text-muted-foreground",
              )}
            />
          </div>
        </div>
      </div>
      <Container>
        <div className={cn("mx-auto py-16 md:py-32")}>{children}</div>
      </Container>
    </>
  );
}

export default Layout;
