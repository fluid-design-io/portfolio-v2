"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import Modal from "../ui/modal";

function ServerModal({
  children,
  description,
  label,
  title,
}: {
  children: React.ReactNode;
  description: string;
  label: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="relative z-10 font-mono text-muted-foreground/50 hover:text-muted-foreground focus-visible:text-muted-foreground contrast-more:text-muted-foreground"
        onClick={() => setOpen(true)}
        size="sm"
        variant="link"
      >
        {label}
      </Button>
      <Modal
        description={description}
        onOpenChange={setOpen}
        open={open}
        title={title}
      >
        {children}
      </Modal>
    </>
  );
}

export default ServerModal;
