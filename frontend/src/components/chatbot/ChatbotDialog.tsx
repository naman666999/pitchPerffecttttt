
"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ChatbotDialog({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (isOpen: boolean) => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chatbot (Deprecated)</DialogTitle>
        </DialogHeader>
        <p>This component is deprecated. Please use NarratoSheet.</p>
      </DialogContent>
    </Dialog>
  );
}
