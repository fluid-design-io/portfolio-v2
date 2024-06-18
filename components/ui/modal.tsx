"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  description?: null | string;
  desktopClassName?: string;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
  title: React.ReactNode | string;
}

function Modal({
  children,
  description,
  desktopClassName,
  onOpenChange,
  open,
  title,
}: ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent
          className={cn("px-0 pb-0 sm:max-w-[520px]", desktopClassName)}
        >
          <DialogHeader className="px-4">
            {typeof title === "string" ? (
              <DialogTitle className="subtitle text-4xl">{title}</DialogTitle>
            ) : (
              title
            )}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <ScrollArea className="max-h-[calc(80svh-4.5rem)]">
            {children}
            <div className="h-6" />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer onOpenChange={onOpenChange} open={open}>
      <DrawerContent className="max-h-[calc(100svh-4rem)]">
        <DrawerHeader className="*:text-center">
          <DrawerTitle className="subtitle text-4xl">{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <ScrollArea className="overflow-y-auto pb-6">
          {children}
          <div className="mt-8 flex w-full justify-center">
            <DrawerClose asChild>
              <button className="min-w-48">Close</button>
            </DrawerClose>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default Modal;
