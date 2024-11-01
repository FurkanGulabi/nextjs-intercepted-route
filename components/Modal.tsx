"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "./ui/dialog";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="bg-transparent border-none flex items-center justify-center">
          <DialogClose></DialogClose>
          <DialogTitle className="sr-only">Image</DialogTitle>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
